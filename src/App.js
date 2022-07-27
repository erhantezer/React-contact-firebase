import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './pages/Main';


function App() {
  return (
    <div>
      <Main/>
      <ToastContainer />
    </div>
  );
}

export default App;
