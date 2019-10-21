import React from 'react';

import { Provider } from 'react-redux'
import store from './src/store'

//rotas + react-navigation conectados no redux, podendo agora usar nos sagas
import { Navigator } from './src/routes'

import Layout from './src/components/shared/Layout'

console.disableYellowBox = true

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Navigator/>
      </Layout>
    </Provider>
  );
};

export default App;
