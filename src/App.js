import logo from './logo.svg';
import './App.css';

function App() {
    const name = 'Юрій';
    
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}
        </p>
      </header>
    </div>
  );
}

export default App;
