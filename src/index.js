import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import { GlobalDataContext } from "./context/context";
import axios from "axios";

function Root() {
  const id = "6320adad48dc3dbded2db703";
  const [rpdata, setrpdata] = useState({});

  //useEffect para peticion al servidor
  useEffect(() => {
    // console.log(“haciendo fetch”)
    async function fetchData() {
      try {
        const response = await axios({
          baseURL: "https://servidorpublico.herokuapp.com/api",
          url: `/paginas/${id}`,
          method: "get",
        });
        console.log(response.data);
        //se convierte la data en el objeto
        setrpdata(JSON.parse(JSON.stringify(response.data)));
        // console.log(rpdata)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
       <GlobalDataContext.Provider value={{ rpdata }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}></Route>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </GlobalDataContext.Provider>
    </>
  );
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("mingrand"));
