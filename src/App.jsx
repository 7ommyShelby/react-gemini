import './App.css'
import { store } from './comp/redux/store'
import { Provider } from 'react-redux'


import Home from './comp/Home'
function App() {


  return (
    <>
      <Provider store={store}>
         <Home />
       
      </Provider>

    </>
  )
}

export default App
