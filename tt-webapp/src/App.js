import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from './UserList';
import TransitCardList from './TransitCardList';
import TicketList from './TicketList';
import UserFormEditor from "./UserFormEditor";
import TransitCardFormEditor from "./TransitCardFormEditor";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path="/users/:id/edit" element={<UserFormEditor/>}/>
            <Route path="/users/:id/transitcards" element={<TransitCardList/>}/>
            <Route path="/transitcards/:id" element={<TicketList/>}/>
            <Route path="/transitcards/:id/edit" element={<TransitCardFormEditor/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
