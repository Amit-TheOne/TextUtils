import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Switch,
  Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert("null");
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
      // document.title = "TextUtils - Dark Mode";

      // This is the code that changes the title continuously to catch users attentions. Doesn't give a good user experience. (Flash Title)
      // setInterval (() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval (() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container my-3">

          <Switch>
            {/* <Route exact path="/about">
            <About />
            </Route> */}
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="TextUtils - Word Counter | Character Counter | Remove extra spaces and more!" mode={mode} />
            </Route>
          </Switch>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
