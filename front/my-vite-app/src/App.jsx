import { useEffect,  } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import {addItemAsync} from "./store/reducers/getSlice"
import { Registration } from './components/registration/Registration'
import { Home } from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import { Change } from './components/change/Change'
function App() {
 
  
  const Pages = () => <>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/change/:Id" element={<Change/>} />
  </Routes>
  </>
  return (

    <> 
     <div className='w-[100%] h-[110vh] bg-[#E9F0EA]' >
        <Pages/>
      </div>      
      </>
  )
}

export default App

