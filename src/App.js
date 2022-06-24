import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <div>
        
        {/* Gunakan tag <h1> untuk mendisplay "Hello World" */}
        <h1> Hello World </h1>
        
        {/* Gunakan tag <p> untuk mendisplay "Ayo belajar React bersama-sama!" */}
        <p> Ayo belajar React bersama-sama! </p>

        {/* Gunakan tag <img> untuk menambahkan gambar */}
        <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/kentheninja.png' alt="" />
        
        </div>    
      </body>
    </div>
  );
}

export default App;
