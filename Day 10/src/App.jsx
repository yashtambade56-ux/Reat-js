import './App.css';
import React from 'react';
import EventHandling from './componet/eventhanding.jsx';
import SearchBox from './componet/SearchBox.jsx';
import Toggle from './componet/toggle.jsx';
import Tranding from './componet/img.jsx'; 
import ConvertClass from './componet/classcomponets.jsx';
import Counter from './componet/hooks/hook_1_usestate.jsx';
import Users from './componet/hooks/users.jsx';
import useLocalStorage from './componet/hooks/localstorage.jsx';
import Students from './componet/students.jsx';
import Controllform from './componet/controledform.jsx';
import UnControllform from './componet/uncantrollform.jsx';
import AsyncFetchExample from './componet/fetch-async.jsx';

function App() {
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
      <Counter />
      __________________________________
      <Users />
      <hr />
      <Students />
      <hr />
      <h5>Controlled Form</h5>
      <Controllform />
      __________________________________
      <h5>UnControlled Form</h5>
      <UnControllform />

      <hr />
      <AsyncFetchExample />

    </div>
  );
}

export default App;