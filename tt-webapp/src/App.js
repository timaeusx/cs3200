import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from './UserList';
import TransitCardList from './TransitCardList';
import TicketList from './TicketList';
import UserFormEditor from "./UserFormEditor";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path="/users/:id" element={<UserFormEditor/>}/>
            <Route path="/users/:id/transitcards" element={<TransitCardList/>}/>
            <Route path="/transitcards/:id" element={<TicketList/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
