import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary">

        <a className="navbar-brand"> Restaurant</a>
        <button className="btn btn-primary">
          orders <span className="badge bg-secondary"> 5</span>
        </button>
      </nav>

    </div>
  )
}

export default Header
