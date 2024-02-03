// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      showAlert("Light mode is enabled", "success");
      document.body.style.backgroundColor = 'white';
      document.body.style.textColo = 'white';
    }
    else {
      setMode('dark');
      showAlert("Dark mode is enabled", "success");
      document.body.style.backgroundColor = 'grey';
    }
  }
  return (
    <>
      <Router>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Routes>
            <Route exact path="/about" element={<About />}> </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />}></Route>
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
