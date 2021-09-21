import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// pages 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// pages detail
import DetailContact from './detail-pages/DetailContact';
import "./App.css";

// import HelloWorld from "./HelloWorld";
function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/contact/detail-contact">
          <DetailContact />
        </Route>
      </Switch>

      
    </Router>
  );
}

export default App;


{/* <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld /> */}

      {/* {person.umur}
      {person.umur}
      {person.umur} */}
      {/* <h1>Hello World</h1>
      <p>SIC Coding Bootcamp</p>
      <p>{nama.toUpperCase() + " skilvul"}</p> */}

      {/* {message} */}

      {/* {lapar ? <h1>makan</h1> : <h1>nunggu lapar</h1>} */}

      {/* {person.nama}
      {person.isVaccinated.toString()}
      {person.umur} */}

      {/* {murid.map((item, key) => (
        <h1 key={key}>{item}</h1>
      ))} */}

      {/* {murid}

      {dataMurid.map((item, key) => (
        <ul key={key}>
          <li>{item.nama}</li>
          <li>{item.lokasi}</li>
          <li>{item.kelas}</li>
        </ul>
      ))} */}


// const nama = "thoriq";

  // const add = () => {

  // }

  // let light = "green";
  // let message;

  // if (light === "green") {
  //   message = <h1>Boleh Jalan</h1>;
  // }

  // const lapar = false;

  // const person = {
  //   nama: "skilvul",
  //   umur: 20,
  //   isVaccinated: true,
  // };

  // const murid = ["studytools", "e learning", "baik app"];

  // const dataMurid = [
  //   {
  //     nama: "studytools",
  //     lokasi: "jakarta",
  //     kelas: 11,
  //   },
  //   {
  //     nama: "e learning",
  //     lokasi: "jakarta",
  //     kelas: 11,
  //   },
  //   {
  //     nama: "baik app",
  //     lokasi: "jakarta",
  //     kelas: 11,
  //   },
  // ];
  // jsx