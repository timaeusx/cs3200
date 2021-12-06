import UserList from './UserList';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
