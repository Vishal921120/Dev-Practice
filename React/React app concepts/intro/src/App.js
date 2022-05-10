import './App.css';
import ChangedName from './Components/Great';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import {Small} from './Components/Small';

function App() {
  return (
    <div className='App'>
    <ChangedName/>
    <Small/>
    <Greet name="Vishal" class="XI">
      <p>This is children</p>
    </Greet>
    <Greet name="Vis" class="XIadf">
      <button>I am button</button>
    </Greet>
    <Welcome name="Raju" class="XIdfadadf">
      <button>I am button</button>
    </Welcome>
    </div>
    
  );
}

export default App;
