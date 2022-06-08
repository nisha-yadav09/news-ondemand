import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewsPage from '../NewsPage/NewsPage';
import GeneralPage from '../GeneralPage/GeneralPage';
import SciencePage from '../SciencePage/SciencePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
          <Route path="/news" element={<NewsPage user={user} setUser={setUser} />} /> 
          <Route path="/news/general" element={<GeneralPage user={user} setUser={setUser} />} />
          <Route path="/news/science" element={<SciencePage user={user} setUser={setUser} />} />
          <Route path="/*" element={<Navigate to="/news" user={user} setUser={setUser} />} /> 
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
