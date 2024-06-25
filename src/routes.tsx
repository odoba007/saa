import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import ReLogin from './pages/re-login'
import Success from './pages/success'
// import Code from './pages/code'
import Additional from './pages/additional'
import Code from './pages/code'




export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/re-login' element={<ReLogin/>}/>
            <Route path='/login/auth' element={<Code/>}/>
            
            <Route path='/login/auth/2' element={<Additional/>}/>
            
            
            <Route path='/success' element={<Success/>}/>
        </Routes>
    </BrowserRouter>
  )
}