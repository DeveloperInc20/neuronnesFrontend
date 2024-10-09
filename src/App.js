import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Bienvenue à Neuronnes Technologies.
          <br />
          <h4 style={{ paddingLeft: '20px', paddingRight: '20px' }}>
            Neuronnes Technologies est une entreprise spécialisée dans la
            création d'applications web et mobiles innovantes.
          </h4>
          <br />
          <h4>
            Veuillez vous inscrire avec vos informations personnelles.
          </h4>
        </p>
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
