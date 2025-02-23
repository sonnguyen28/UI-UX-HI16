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
import Group from './layout/Group/group';
import Employee from './component/group/employee';
import GSV from './layout/GSV/gsv';
import AppList from './component/tasklistworker/AppList';
import WorkerTaskList from './layout/Worker/WorkerTaskList';
import KPI from './layout/KPI/KPI';
import CreateKPI from './layout/KPI/CreateKPI';
import WorkerDashboard from './layout/Worker/WorkerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dash' element={<Dash />} />
        <Route path = '/alltask' element = { <Task/> }/>
        <Route path="/newJob" element={<NewJob/>}/>
        <Route path="/group" element={<Group />}/>
        <Route path="/a1/kpi" element={<Employee group={"A1"} />}/>
        <Route path="/a2/kpi" element={<Employee group={"A2"} />}/>
        <Route path="/a3/kpi" element={<Employee group={"A3"} />}/>
        <Route path="/gsv" element={<GSV />} />
        <Route path="/kpi" element={<KPI />} />
        <Route path="/create_kpi"  element={<CreateKPI />} />
        <Route path="/worker/tasklist" element={<WorkerTaskList/>}/>
        <Route path="/worker/dashboard" element={<WorkerDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
