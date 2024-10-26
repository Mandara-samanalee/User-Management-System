import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to user management system</h1>
        <button
          className='firstbutton'
          onClick={() => navigate('/users')}
        >
          Manage Users
        </button>
      </header>
    </div>
  );
}

export default App;
