// import logo from './logo.svg';
// import './App.css';
import NewForm from "./Todo/NewForm";
import Shedul from "./shedules/Shedul";
import UseCustomCount from "./CustomHook/Custom";
import PostMethod from "./fakeApi/PostMethod";
import GetMethod from "./fakeApi/GetMethod";
import FormR from "./TodoForm/FormR";
import FetchData from "./TodoForm/FetchData";
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Routes } from "react-router-dom";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Contact from "./Routing/Contact";
import Navbar from "./Navbar";
import Newforpra from "./Newforpra";
import Navitem from "./Navitem";
import Whether from "./Whether";

function App() {
  return (
    <>
      {/* <PostMethod /> */}
      {/* <UseCustomCount /> */}
      {/* <NewForm /> */}
      {/* <Shedul /> */}
      {/* <GetMethod /> */}
      {/* <FormR /> */}
      {/* <FetchData /> */}
      {/* <Router>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>


      </Router> */}
      {/* <Router> */}


        {/* <Routes>
          <Route path="/" element={<Navitem />} />
          <Route path="/FormR" element={<FormR />} />
          <Route path="/FetchData" element={<FetchData />} />
        </Routes> */}



      {/* </Router> */}
      {/* <Newforpra /> */}
      <Whether/>

    </>
  );
}

export default App;


{/* <TheamContaxt.provider></TheamContaxt.provider> */ }