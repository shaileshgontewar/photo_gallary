import "./App.css";
import NavBar from "./component/comman/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import NavbarComponent from "./component/comman/Navbar";
// import UploadImg from "./component/pages/uploadImg";
import Home from "./component/pages/Home";
import ImageGallary from "./component/pages/ImageGallary";
import AudioGallary from "./component/pages/AudioGallary";
import VideoGallary from "./component/pages/VideoGallary";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="image" element={<ImageGallary />}></Route>
        <Route path="audio" element={<AudioGallary />}></Route>
        <Route path="video" element={<VideoGallary />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
