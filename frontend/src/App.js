import Routes from './routes'
import * as socketApi from './api/socketAPI';
import './App.css';

var socket = socketApi.connect();
function App() {
  return (
    <div className="App">
      <Routes socket={socket} />
    </div>
  );
}

export default App;
