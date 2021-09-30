

// pages
import Login from './Login'
import Register from './Register'
import Home from './Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  // const murid = {
  //   namaKelompok: "studytools",
  //   nama: "Hafiz",
  //   kelas: 12
  // }

  // console.log(murid)

  // JSON stringify dengan variable
  // const muridJSON = JSON.stringify(murid)
  // console.log(muridJSON)

  // memasukan data muridJSON ke local storage
  // localStorage.setItem('murid', muridJSON)

  // JSON stringify tanpa variable
  // const muridJSON2 = JSON.stringify({
  //   namaKelompok: "studytools",
  //   nama: "Rahmanda",
  //   kelas: 12
  // })
  // console.log(muridJSON2)

  // js parse dari json
  // const muridJS = JSON.parse(muridJSON)
  // console.log(muridJS)

  // localStorage getItem from local storage
  // const muridLocal = localStorage.getItem('murid')
  // console.log('local storage', muridLocal)
  // const muridLocalJS = JSON.parse(muridLocal)

  return (
    <Router>
    <nav>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>

          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>
      </nav>
      

      {/* route */}

      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
