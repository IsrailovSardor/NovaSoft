import './App.scss';
import { Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import {ParallaxProvider} from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
        <ParallaxProvider>
            <Routes>
              <Route path={'/'} element={<Main/>}/>
            </Routes>
        </ParallaxProvider>
    </div>
  );
}

export default App;
