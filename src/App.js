import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Navbar from './Components/Navbar/Navbar';
import TimeTable from './Components/TimeTable/TimeTable'
import GT from './Components/GenerateTimetable/GT';

function App() {

  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/timetable' element={<TimeTable/>}></Route>
        <Route path='/generate-timetable' element={<GT/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
