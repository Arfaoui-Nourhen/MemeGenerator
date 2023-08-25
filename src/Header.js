import React from 'react'
import './index.css'

function Header() {
  return (
    <header style={{height:'6rem',backgroundColor:'#9921e8',backgroundImage:'linear-gradient(315deg, #9921e8 0%, #5f72be 74%)',display: 'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <img src='https://www.pngall.com/wp-content/uploads/2016/05/Trollface.png' alt='problem?' />
        <p style={{color:'whitesmoke',fontSize:'2rem'}}>Meme Generator</p>
    </header>
  )
}

export default Header

