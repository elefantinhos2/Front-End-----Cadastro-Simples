
// import logo from './logo.svg';
import './App.css';
// import FormCadastro from './components/FormCadastro';
import { useState } from 'react';
import Routes from './routes';

function App() {

  const [user, setUser] = useState();



return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Entrega: Form</h1> */}
      </header>
      <main>
        <Routes/>
      </main>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {

//   const [user, setUser] = useState();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
