import { connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';

import reducer from './reducer';
import Routes from './routes';

const { navReducer, middleware } = reducer(Routes);

const App = createReduxContainer(Routes, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});

const Navigator = connect(mapStateToProps)(App);

export { Navigator, navReducer, middleware };