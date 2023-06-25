import './App.css';
import About from './components/About';
import Home from './components/Home';
import Report from './components/Report';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Aside from './components/dashboard/Aside';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Drugs from './components/dashboard/Drugs';
import Profile from './components/dashboard/Profile';
import NewDrug from './components/dashboard/NewDrug';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/report-fake-drug' element={<Report/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Aside/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/registered-drugs' element={<Drugs/>}/>
        <Route path='/register-new-drug' element={<NewDrug/>}/>
        <Route path='/register-new-drug' element={<NewDrug/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
