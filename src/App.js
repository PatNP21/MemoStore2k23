import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Register from './components/Register'
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import Error500 from './components/Error500';
import NotesDashboard from './components/Notes/NotesDashboard';
import AlbumDashboard from './components/Album/AlbumDashboard';
import CalendarDashboard from './components/Calendar/CalendarDashboard';
import DashboardNav from './components/DashboardNav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="dashboard">
          <Route path=":id" element={<Dashboard/>}>
            <Route path="notes" element={
              <>
                <NotesDashboard/>
              </>}
            />
            <Route path="album" element={
              <>
                <AlbumDashboard/>
              </>
            }/>
            <Route path="calendar" element={<CalendarDashboard/>}/>
          </Route>
        </Route>
        <Route path="error500" element={<Error500/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
