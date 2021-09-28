import {Link, useRouteMatch, Route} from 'react-router-dom'
import NavBar from '../component/NavBar'

import AboutDetail from './AboutDetail'

function About() {
  let match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <NavBar />
      <h1>About blabla</h1>
      <Link to="/about/detail">Menuju About Detail</Link>

      

      <Route path={`${match.path}/detail`}>
        <AboutDetail />
       </Route>
    </div>
  )
}

export default About
