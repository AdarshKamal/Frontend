import '../styles/App.css';

import { createBrowserRouter, RouterProvider,Routes,Route } from 'react-router-dom'

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Home from './Home';
import Login from '../pages/Auth/login';
import Signup from '../pages/Auth/signup';
import ForgotPasssword from '../pages/Auth/ForgotPassword';
import Pagenotfound from './Pagenotfound';
import { CheckUserExist } from '../helper/helper';
import PrivateRoute from "./Routes/private";
import HomePage from "./Validation";
import Val from './Homepage';

/** react routes <CheckUserExist><Quiz /></CheckUserExist><Main></Main> */
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Main/>
//   },
//   {
//     path : '/quiz',
//     element : <CheckUserExist><Quiz /></CheckUserExist>
//   },
//   {
//     path : '/result',
//     element : <CheckUserExist><Result /></CheckUserExist>
//   },
// ])

function App() {
  return (
    <>

<Routes>
<Route  path="/" element={<Home/>}/>
<Route  path="/Val" element={<Val/>}/>
<Route path="/Homepage" element={<PrivateRoute/>}>  
 <Route  path="user" element={<HomePage/>}/>
 <Route path="user/main" element=<Main/> />
 <Route path="user/quiz" element= <CheckUserExist><Quiz /></CheckUserExist> />
 <Route path="user/result" element=<CheckUserExist><Result /></CheckUserExist> />
  
 </Route>
<Route  path="/forgot-password" element={<ForgotPasssword/>}/>
  <Route  path="/login" element={<Login/>}/>
  <Route  path="/register" element={<Signup/>}/>
  <Route  path="/*" element={<Pagenotfound/>}/> 
</Routes> 
      </>

    
  );
}

export default App;



