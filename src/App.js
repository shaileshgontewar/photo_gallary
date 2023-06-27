import "./App.css";
import NavBar from "./component/comman/Navbar";
import {  Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import ImageGallary from "./component/pages/ImageGallary";
import AudioGallary from "./component/pages/AudioGallary";
import VideoGallary from "./component/pages/VideoGallary";
import UploadImg from "./component/pages/uploadImg";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="image" element={<ImageGallary />}></Route>
        <Route path="upload" element={<UploadImg/>}></Route>
        <Route path="audio" element={<AudioGallary />}></Route>
        <Route path="video" element={<VideoGallary />}></Route>
      </Routes>
    </>
  );
}

export default App;
