import './App.css';
import EventHandling from './componet/eventhanding.jsx';
import SearchBox from './componet/SearchBox.jsx';
import Toggle from './componet/Toggle.jsx';
import Tranding from './componet/img.jsx'; 
import ConvertClass from './componet/classcomponets.jsx';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <EventHandling />
      <SearchBox />
      <Toggle />
      <hr />
      <Tranding />
      <hr />
      <ConvertClass />
    </div>
  );
}

export default App;