import React, { useContext } from 'react';
import './App.css';

// Component Imports
import EventHandling from './componet/eventhanding.jsx';
import SearchBox from './componet/SearchBox.jsx';
import Toggle from './componet/toggle.jsx';
import Tranding from './componet/img.jsx'; 
import ConvertClass from './componet/classcomponets.jsx';
import Students from './componet/students.jsx';
import Controllform from './componet/controledform.jsx';
import UnControllform from './componet/uncantrollform.jsx';
import AsyncFetchExample from './componet/fetch-async.jsx';
import AxiosEx from './componet/axiosEx.jsx';

// Context Import
import { UserContext } from './componet/Context-api/Context.jsx';
function Dashboard() {
  const user = useContext(UserContext);
  return <h2>Welcome, {user ? user.name : 'Guest'}!</h2>;
}

function App() {
  const user = { name: "Yash" };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <EventHandling /> 
      __________________________________
      <SearchBox />
      __________________________________
      <Toggle />
      <hr />
      <Tranding />
      <hr />
      <ConvertClass />
      <hr />
      
      <Students />
      <hr />
      
      <h5>Controlled Form</h5>
      <Controllform />
      <hr />
      
      <h5>UnControlled Form</h5>
      <UnControllform />
      <hr />
      
      <AsyncFetchExample />
      <hr />
      
      <AxiosEx />
      <hr />
      
      <UserContext.Provider value={user}>
        <Dashboard />
      </UserContext.Provider>
    </div>
  );
}

export default App;