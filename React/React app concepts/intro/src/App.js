import './App.css';
import ChangedName from './Components/Great';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import State from './Components/State';
import Counter from './Components/Counter';
import EventHandler from './Components/EventHandler';
import {Small} from './Components/Small';

function App() {
  return (
    <div className='App'>
      <EventHandler/>
      {/* <Counter addValue ="3"/> */}
      {/* <Greet name="Vis" classNo="XIadf">
        <button>I am button</button>
      </Greet> */}
      {/* <Welcome/> */}
        {/* <ChangedName/>
        <Small/>
        <Greet name="Vishal" class="XI">
          <p>This is children</p>
        </Greet>
        <Welcome name="Raju" class="XIdfadadf">
          <button>I am button</button>
        </Welcome> */}
    </div>
    
  );
}

export default App;
