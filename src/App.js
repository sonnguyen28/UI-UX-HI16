import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import logo
import Home from './layout/Home/home';
import Dash from './layout/Dash/dash';
import Task from './layout/Task/task';
import NewJob from './component/form/NewJob';
import AppList from './component/tasklistworker/AppList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dash' element={<Dash />} />
        <Route path = '/alltask' element = { <Task/> }/>
        <Route path="/newJob" element={<NewJob/>}/>
        <Route path="/AppList" element={<AppList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
