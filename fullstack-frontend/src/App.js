import React from "react";
import Home from "./Home.js";
import Login from "./Login.js";
import SignUp from "./SignUp.js";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}




export default App;
