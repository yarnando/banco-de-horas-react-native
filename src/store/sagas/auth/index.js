import { takeLatest, put, call, select, delay } from "redux-saga/effects";
import { StackActions, NavigationActions, DrawerActions } from 'react-navigation'
import { types as globalTypes, creators as globalCreators } from "../../ducks/_global";
import { types as authTypes, creators as authCreators } from "../../ducks/auth";
import rsfb from "../../services/firebaseConfig";

const getUser = (state) => state.auth.user

function* signUp() {

  let user = yield select(getUser)

  try {

    yield put(globalCreators.loading(true))
    let userLogged = yield call(rsfb.auth.createUserWithEmailAndPassword, user.email, user.password);
    yield put(globalCreators.message({ type: "positive", text: "Sua conta foi criada com sucesso! Fazendo login..." }));
    yield put(globalCreators.loading(false))
    yield put(authCreators.user({ email: user.email, password: '', userId: userLogged.user.uid }))
    yield delay(1500)  
    yield put({
        type: authTypes.USER_LOGGED,
        payload: {
          userLogged: true
        }
      });   
    yield put(globalCreators.message({ type: "", text: "" }));      
    yield put(NavigationActions.navigate({ routeName: 'Comptime' })
    );      

  } catch (error) {

    if(error.code == 'auth/email-already-in-use') {
        yield put(globalCreators.message({ type: "danger", text: `Este e-mail já está em uso. Por favor, digite outro e-mail.` }));
    } else {
        yield put(globalCreators.message({ type: "danger", text: `${error}` }));
    }

    yield put({ type: globalTypes.ERROR });
    yield put(globalCreators.loading(false))
    yield delay(3000)  
    yield put(globalCreators.message({ type: "", text: "" }));      

  }

}

function* signIn() {

    let user = yield select(getUser)

    try {
        yield put(globalCreators.loading(true))
        let userLogged = yield call(rsfb.auth.signInWithEmailAndPassword, user.email, user.password);
        yield put(globalCreators.loading(false))  
        yield put({
            type: authTypes.USER_LOGGED,
            payload: {
              userLogged: true
            }
          });   
        yield put(authCreators.user({ email: user.email, password: '', userId: userLogged.user.uid }))           
        yield put(
            NavigationActions.navigate({ routeName: 'Comptime' })
        );          
      } catch (error) {
        if(error.code == 'auth/user-not-found') {
            yield put(globalCreators.message({ type: "danger", text: `Usuário não encontrado.` }));
        } else {
            yield put(globalCreators.message({ type: "danger", text: `${error}` }));
        }
        
        yield put({ type: globalTypes.ERROR });
        yield put(globalCreators.loading(false))
        yield delay(3000)  
        yield put(globalCreators.message({ type: "", text: "" }));          
      }
}

function* logOut() {

    try {
        yield put({ type: globalTypes.LOADING });
        yield call(rsfb.auth.signOut);
        yield put(globalCreators.message({ type: "positive", text: "Logged out!" }))
        yield put({
          type: authTypes.USER,
          payload: {
            email: '',
            password: ''
          }
        });
        yield put({ type: globalTypes.LOADING });
    
        yield put({
          type: authTypes.USER_LOGGED,
          payload: {
            userLogged: false
          }
        });
        yield put(
            StackActions.popToTop()
        );          
        yield put(
            NavigationActions.navigate({ routeName: 'Signin' })
        );          
      } catch (error) {
        yield put(globalCreators.message({ type: "danger", text: "Error logging out: " + error }))
        yield put({ type: globalTypes.ERROR });
      }

}

export default [
  takeLatest(authTypes.SIGNUP, signUp),
  takeLatest(authTypes.SIGNIN, signIn),
  takeLatest(authTypes.LOGOUT, logOut)
];
