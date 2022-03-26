import { Routes, Route } from 'react-router-dom';
import { Home, Profile, Login } from './pages';
import { Navbar, RequireAuth } from './components';
import { useSelector } from 'react-redux';

function App() {
  const username = useSelector((state) => state.authReducer.username);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={username != '' ? <Home /> : <RequireAuth />} />
        <Route path='/profile' element={username != '' ? <Profile /> : <RequireAuth />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
