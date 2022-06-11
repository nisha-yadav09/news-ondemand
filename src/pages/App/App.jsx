import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewsPage from '../NewsPage/NewsPage';
import GeneralPage from '../GeneralPage/GeneralPage';
import SciencePage from '../SciencePage/SciencePage';
import TechnologyPage from '../TechnologyPage/TechnologyPage';
import BusinessPage from '../BusinessPage/BusinessPage';
import SportsPage from '../SportsPage/SportsPage';
import HealthPage from '../HealthPage/HealthPage';
import EntertainmentPage from '../EntertainmentPage/EntertainmentPage';
import ChatPage from '../ChatPage/ChatPage';
import NavBar from '../../components/NavBar/NavBar';
import io from "socket.io-client"
import './App.css';


function App() {
  let navi =''
  const [user, setUser] = useState(getUser());
 

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/news" element={<NewsPage />} /> 
            <Route path="/news/general" element={<GeneralPage/>} />
            <Route path="/news/science" element={<SciencePage/>} />
            <Route path="/news/technology" element={<TechnologyPage/>} />
            <Route path="/news/business" element={<BusinessPage/>} />
            <Route path="/news/sports" element={<SportsPage/>} />
            <Route path="/news/health" element={<HealthPage/>} />
            <Route path="/news/entertainment" element={<EntertainmentPage/>} />
            <Route path="/news/chat" element={<ChatPage/>} />
            <Route path="/*" element = {<Navigate to="/news" user={user} setUser={setUser} />} /> 
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
