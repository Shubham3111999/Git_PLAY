
import './App.css';
import Navbar from './Component/Navbar.js'
import TextForm from './Component/TextForm.js'
import About from './Component/About.js'
import Alert from './Component/Alert.js'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  let changeAlert = (message, type) => {
    setalert({
      msg: message,
      type: type

    })

    setTimeout(() => {
      setalert(null);
    }, 2000);

  }


  let changeToDark = () => {

    if (mode == "light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(20 36 97)"
      changeAlert("Dark mode enabled", "success");

    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      changeAlert("Default mode enabled", "success");

    }

  }

  return (
    <>
      <Router>
        <Navbar title="TextUtil" aboutText="About Us" mode={mode} toggleFunction={changeToDark} />
        <Alert alert={alert} />

        <div className="container mt-3">
          <Routes>
            <Route exact path="/about" element={<About />}> </Route>
            <Route exact path="/" element={<TextForm mode={mode} changeAlert={changeAlert} />}></Route>
          </Routes>
        </div>
      </Router>

      {/* <Navbar title="TextUtil" aboutText="About Us" mode={mode} toggleFunction={changeToDark} />
      <Alert alert={alert} />
      <div className='container'><TextForm mode={mode} changeAlert={changeAlert} /> <About /></div> */}
    </>


  );
}

export default App;
