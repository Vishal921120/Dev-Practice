import './App.css';
import FocusInput from './Components2/9. Refs/FocusInput';
import PortalDemo from './Components2/11. Portals/PortalDemo';
import Hero from './Components2/10. Error Handling/Hero';
import ErrorBoundary from './Components2/10. Error Handling/ErrorBoundary';


function App() {
  return (
    <div className='App'>

      <ErrorBoundary>
        <Hero heroName= "Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName= "Superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName= "joker"/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
