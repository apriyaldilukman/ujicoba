import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import LoginForm from './components/forms/LoginForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWord />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
