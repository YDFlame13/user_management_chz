import { BrowserRouter, Routes,Route } from 'react-router-dom'

import './App.css'

//引入路由重定向组件
import Redirect from './components/Redirect'

//引入其他组件
import Home from './routes/Home'
import ForgetPassword from './routes/ForgetPassword'
import Login from './routes/Login'
import Regist from './routes/Regist'

import FirstPage from './routes/Home/routes/FirstPage'
import Students from './routes/Home/routes/Students'

function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Redirect to="/home?theme=Blue"></Redirect>}></Route>
        <Route path='/home' element={<Home></Home>}>
            <Route index element={<FirstPage></FirstPage>}></Route>
            <Route path='/home/students' element={<Students></Students>}></Route>
        </Route>
        <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/regist' element={<Regist></Regist>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
