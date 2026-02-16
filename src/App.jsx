import { Routes, Route } from "react-router-dom";
import FloatingHearts from "./FloatingHearts";
import HomePage from "./HomePage";
import LoveLetter from "./LoveLetter";
import Memories from "./Memories";
import Valentine from "./Valentine.jsx"
import Together from "./Together.jsx"
import SongSlide from './SongSlide.jsx' 


function App() {
  return (
    <>
      {/* ❤️ Global Floating Hearts */}
      <FloatingHearts />

      <Routes>
        <Route path="/" element={<Valentine/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/love-letter" element={<LoveLetter />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/songslide" element={<SongSlide/>}/>
        <Route path="/together" element={<Together/>}/>
      </Routes>
    </>
  );
}

export default App;
