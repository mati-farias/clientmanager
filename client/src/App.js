import './App.css';
import { Routes, Route } from 'react-router-dom';
import ClientListView from './views/ClientList/ClientListView';
import ClientDetailView from './views/ClientDetail/ClientDetailView';
import CreateClientView from './views/CreateClient/CreateClientView';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<ClientListView />}
        />
        <Route
          path='/create'
          element={<CreateClientView />}
        />
        <Route
          path='/:id'
          element={<ClientDetailView />}
        />
      </Routes>
    </div>
  );
}

export default App;
