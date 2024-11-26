import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Componentes/login'; // Nombre en PascalCase

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
