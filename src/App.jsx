import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './pages/visitor/NavBar'
import { Prueba } from './Prueba'
import { Home } from './pages/visitor/home'
import { UserAuthContextProvider } from './UserAuthContext.jsx';

function App() {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/prueba' element={<Prueba />} />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}


export default App
