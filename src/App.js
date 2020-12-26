import './App.css'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import HooksIceCreamContainer from './components/HooksIceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
