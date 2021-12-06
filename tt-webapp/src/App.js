import UserList from './UserList';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TransitCardList from './TransitCardList';
import TicketList from './TicketList';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/users/:id" element={<TransitCardList/>}/>
          <Route path="/transitcards/:id" element={<TicketList/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
