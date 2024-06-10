import './App.css';
import { Convertor } from './components/Convertor';
import { Steps } from "./components/Steps";
import { FotoManager } from "./components/FotoManager";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <nav>
        <ul className="nav-ul">
          <li className="nav-ul-li"><Link to="/">Главная</Link></li>
          <li className="nav-ul-li"><Link to="/hex2rgb">Конвертер цветов</Link></li>
          <li className="nav-ul-li"><Link to="/steps">Учёт тренировок</Link></li>
          <li className="nav-ul-li"><Link to="/photo">Менеджер фото</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <div className="wrap">
            <h1>Задачи по теме "Формы"</h1>
          </div>
        } />
        <Route path="/hex2rgb" element={<Convertor />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/photo" element={<FotoManager />} />
      </Routes>
    </Router>
  )
}

export default App
