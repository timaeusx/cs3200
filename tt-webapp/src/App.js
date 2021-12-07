import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from './UserList';
import TransitCardList from './TransitCardList';
import TicketList from './TicketList';
import UserFormEditor from "./UserFormEditor";
import TransitCardFormEditor from "./TransitCardFormEditor";
import TicketFormEditor from "./TicketFormEditor";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path="/users/:id/edit" element={<UserFormEditor/>}/>
            <Route path="/users/:id/transitcards" element={<TransitCardList/>}/>
            <Route path="/transitcards/:id/edit" element={<TransitCardFormEditor/>}/>
            <Route path="/transitcards/:id/tickets" element={<TicketList/>}/>
            <Route path="/tickets/:id/edit" element={<TicketFormEditor/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
