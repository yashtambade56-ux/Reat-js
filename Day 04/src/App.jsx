import './App.css';
import EventHandling from './componet/eventhanding.jsx';
import SearchBox from './componet/SearchBox.jsx';
import Toggle from './componet/Toggle.jsx';
import Tranding from './componet/img.jsx'; 

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <EventHandling />
      <SearchBox />
      <Toggle />
      <Tranding />
    </div>
  );
}

export default App;