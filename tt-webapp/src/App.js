import UserList from './UserList';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TransitCardList from './TransitCardList';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/users/:id" element={<TransitCardList/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
