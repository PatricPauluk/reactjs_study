// Components
import FirstComponent from './components/FirstComponent'; // a extensão .js é omitida (em React)
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

// Styles / CSS
import './App.css';

// Os componentes são importados em forma de tag <FirstComponent />
function App() {
  return (
    <div className="App">
      <h1>Olá</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
