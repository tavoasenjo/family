import Landing from './components/Landing';
import Member from './components/Member';
import './styles.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import { FamProvider } from './context/FamilyContext';


function App() {
  return (
    <FamProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path=":memberId" element={<Member />}/>
        </Routes>
      </Router>
    </FamProvider>
  );
}

export default App;
