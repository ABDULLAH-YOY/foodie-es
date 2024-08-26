import { Routes,Route,Navigate } from 'react-router-dom'
import Home from './Home'
import { AuthProvider,useAuth } from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import MainPage from './MainPage'
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/signup';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer/Footer';
const App = () => {
  const { user } = useAuth();
  return (
    <>
    <AuthProvider>
    <Routes>
    <Route 
            path="/" 
            element={ user ? <Navigate to="/main" /> : <Home />} 
          />
      <Route
            path="/main"
            element={
              <ProtectedRoute>
                <MainPage/>
              </ProtectedRoute>
            }
          />
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/sign' element={<Signup/>} />
    </Routes>
    <Footer/>
    </AuthProvider>
            <span className='toaste'>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
            </span>
    </>
  )
}

export default App