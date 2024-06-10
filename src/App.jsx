import Login from './components/Login'
import Home from './components/Home'
import Ticket from './components/Ticket'
import {
  Routes,
  Route
} from "react-router-dom";
import SignUp from './components/signup';

const App = () => {
  return (
  <Routes >
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/Login' element={<Login/>} />
    <Route exact path='/Ticket' element={<Ticket/>}/>
    <Route exact path='/signUp' element={<SignUp/>}/>

  </Routes>)}
export default App;