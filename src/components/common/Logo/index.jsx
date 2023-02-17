import React from 'react'
import "./styles.css"
import logoImg from './logo.png'
const Logo = () => {
  return (
    <div className='logo'>
        <div>
          <img src={logoImg} alt="logo" />
          <span>
            {/* span is inline element */}
            <b>Taste</b>
          </span>
        </div>
        <p>
          Restaurant & BBQ
        </p>
    </div>
  )
}

export default Logo