import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

function Header() {
  var [date,setDate] = useState(new Date());
  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  }); 
  
  return (
    <header>
        <div className='head'>
          <nav className='link'>
            <Link className='ll' to="/">Home</Link>
            <Link  className='ll' to="/about">About</Link>
            <Link  className='ll' to="/thala">Thala</Link>
          </nav>

        || <a className='myname' rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/prahlad-gaur-071107abc/'>Prahlad Gaur</a> || {date.toLocaleDateString()} { date.toLocaleTimeString()} 
        </div>
    </header>
  )
}

export default Header
