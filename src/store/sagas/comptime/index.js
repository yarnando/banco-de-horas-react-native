import { takeLatest, put, call, delay } from "redux-saga/effects";
import { creators as globalCreators } from "../../ducks/_global";
import { types as comptimeTypes } from "../../ducks/comptime";
import { creators as comptimeCreators } from "../../ducks/comptime";
import rsfb from "../../services/firebaseConfig";

import { Alert } from 'react-native'

function* getComptimeList(action) {
  yield put(comptimeCreators.setComptimeList([]));
  let { idUsuario, ano, mes } = action.payload;
  yield put(globalCreators.loading(true));
  try {
    const querySnapshot = yield call(
        rsfb.firestore.getCollection,
        `usuarios/${idUsuario}/${ano}${mes}`
      );
      let comptimeList = [];
      let comptimeId = "";
      querySnapshot.forEach(res => {
        let comptime = res.data().comptimeList;
        comptimeId = res.id;
        comptimeList = [...comptimeList, ...comptime];
      });
      // Alert.alert(comptimeId)
    //   Alert.alert(JSON.stringify(comptimeList))
      if (!!comptimeList.length) {
        yield put(comptimeCreators.setComptimeListId(comptimeId));
        yield put(comptimeCreators.setComptimeList(comptimeList));
        yield calcTotalHoursBank(comptimeList);
      } else {
        Alert.alert("no comptimelist, creating a new one");
        yield createNewComptimeList(action, idUsuario, ano, mes);
      }
      yield put(globalCreators.loading(false));      
  } catch (error) {
    Alert.alert(error);
    yield put(globalCreators.loading(false));    
  }

}

function* calcTotalHoursBank(comptimeList) {
  if (!!comptimeList.length == false) return false;
  let hours = 0,
    minutes = 0,
    negativeMinutes = false;

  comptimeList.map(item => {
    hours = item.difference.hours + hours;
    minutes = item.difference.minutes + minutes;
  });

  minutes < 0 ? negativeMinutes = true : negativeMinutes = false

  if (Math.abs(minutes) > 59 && negativeMinutes) {
    let convertedTime = yield timeConvert(Math.abs(minutes));
    hours = hours - convertedTime.hours;
    minutes = convertedTime.minutes;
  } else if (Math.abs(minutes) > 59 && (negativeMinutes == false)) {
    let convertedTime = yield timeConvert(Math.abs(minutes));
    hours = hours + convertedTime.hours;
    minutes = convertedTime.minutes;
  }

  if (hours > 0 && negativeMinutes) {
    hours = hours - 1 
    hours = `${hours < 10 ? "0" : ""}${hours}`
    minutes = 60 - (Math.abs(minutes));
  } else if(hours < 0 && negativeMinutes) {
    hours = hours = `-${hours < 10 ? "0" : ""}${Math.abs(hours)}`
    minutes = `${Math.abs(minutes) < 10 ? "0" : ""}${Math.abs(minutes)}`
  } else if(hours < 0 && !negativeMinutes) {
    hours = hours = `-${hours < 10 ? "0" : ""}${Math.abs(hours)}`
  } else if(hours == 0 && negativeMinutes) {
    hours = `-${hours < 10 ? "0" : ""}${Math.abs(hours)}`
    minutes = `${Math.abs(minutes) < 10 ? "0" : ""}${Math.abs(minutes)}`    
  } else {
    hours = `${hours < 10 ? "0" : ""}${hours}`
    minutes = `${Math.abs(minutes) < 10 ? "0" : ""}${Math.abs(minutes)}`   
  }
  let hoursBank = {
    hours,
    minutes
  };
  yield put(comptimeCreators.setHoursBank(hoursBank));
}

function* timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return {
        hours: rhours,
        minutes: rminutes
    };
}

function* putComptimeList(action) {
  yield put(globalCreators.loading(true));
  let { idUsuario, ano, mes, id, comptimeList } = action.payload;
  // Alert.alert(id)
  try {
    yield call(
        rsfb.firestore.updateDocument,
        `usuarios/${idUsuario}/${ano}${mes}/${id}`,
        { comptimeList }
      );
      yield put(
        globalCreators.message({ type: "positive", text: "Comptime List updated!" })
      );
      yield delay(1000);
      yield put(globalCreators.message({ type: "", text: "" }));
      yield getComptimeList(action);
      yield put(comptimeCreators.setShowingForm(false));      
  } catch (error) {
      Alert.alert(error)
    yield put(globalCreators.loading(false));    
  }

}

function* createNewComptimeList(action) {
  let { idUsuario, ano, mes } = action.payload;
  let numberOfDays = new Date(ano, mes, 0).getDate();
  let comptimeList = [];
  for (let i = 1; i <= numberOfDays; i++) {
    let item = {
      day: `${i < 10 ? "0" : ""}${i}/${mes}/${ano}`,
      startingTime: "00:00",
      lunchStart: "00:00",
      lunchEnd: "00:00",
      stoppingTime: "00:00",
      difference: {
        hours: 0,
        minutes: 0
      }
    };
    comptimeList.push(item);
  }
  try {
    yield call(rsfb.firestore.addDocument, `usuarios/${idUsuario}/${ano}${mes}`, {
        comptimeList
      });
      yield getComptimeList(action);
  } catch (error) {
    Alert.alert(error)
    yield put(globalCreators.loading(false));    
  }

}

export default [
  takeLatest(comptimeTypes.GET_COMPTIMELIST, getComptimeList),
  takeLatest(comptimeTypes.PUT_COMPTIMELIST, putComptimeList)
];
