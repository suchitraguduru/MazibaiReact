import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Auth from './pages/Auth';
import AuthState from "./Context/AuthState";
import Home from "./pages/Home"
import "./index.css"
import ForgotPass from './pages/ForgotPass';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <AuthState>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/auth' element={<Auth/>} />
                <Route path='/forgotpassword' element={<ForgotPass/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>  
      </AuthState>
    </>
  );
}

export default App;
