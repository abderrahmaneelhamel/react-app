import React from 'react'

const Nav = (props) => {
  return (
    <div>
      <nav>
        <h2>hello {props.name}</h2>
      </nav>
    </div>
  )
}
Nav.defaultProps = {
    name: 'abderrahmane',
}

export default Nav
