import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'

const Header = () => (
  <div>
    <div className="bg-grass"></div>
    <div className="col-md-4">
      <h1 className="header">Raro Punt Club</h1>
      <div className="nav">
        <Link to="/"><button>Home</button></Link>
        <Link to="/bets"><button>Bets</button></Link>
        <Link to="/members"><button>Members</button></Link>
        <Link to="/calculator"><button>Calculator</button></Link>
        {/* <Link to="/horoscopes"><button>Horoscopes</button></Link> */}
      </div>
      <Login />
    </div>
  </div>
)

export default Header
