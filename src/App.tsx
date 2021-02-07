import React,{ useState, useEffect} from 'react'
import {Provider} from 'react-redux';
import Page from './components/Page/index'
import store from './store'
import SplashScreen from './components/SplashScreen';

function App() {
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1600);
  }, []);

  return splash?(
    <SplashScreen/>
  ): (
    <Provider store={store}>
      <div className="App">
      <Page/>
      </div>
    </Provider>
  )
}

export default App;