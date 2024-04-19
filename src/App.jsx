import './App.css'
import { store } from './comp/redux/store'
import { Provider } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Home from './comp/Home'
function App() {


  return (
    <>
      <Provider store={store}>
         <Home />
       {/* <Skeleton/> */}
      </Provider>

    </>
  )
}

export default App
