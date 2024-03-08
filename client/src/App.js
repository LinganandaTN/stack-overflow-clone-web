import Navbar from './Navbar/Navbar'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './AllRoutes'
import Home from './Pages/Auth/Home/Home';
function App() {

  return (
    <div className='App'>
    <Router>
     <Navbar /> 
     <AllRoutes />
     </Router>
       {/* <Home/> */}

    </div>
  );

}
export default App;
