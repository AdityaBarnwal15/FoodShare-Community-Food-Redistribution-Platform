import { BrowserRouter, Routes, Route } from "react-router-dom";

import Browse from "./pages/Browse";
import Post from "./pages/Post";
import MyListings from "./pages/MyListings";
import Profile from "./pages/Profile";

import Nav from "./components/layout/Nav";
import BottomTab from "./components/layout/BottomTab";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />

        <div className="scroll-area">
          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/post" element={<Post />} />
            <Route path="/mine" element={<MyListings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        <BottomTab />
      </div>
    </BrowserRouter>
  );
}

export default App;