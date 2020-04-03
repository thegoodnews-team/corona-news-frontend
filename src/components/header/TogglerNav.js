import React, { useState } from 'react'
import style from './css/toggler.module.css'
import PropTypes from 'prop-types'

export const TogglerNav = ({ onClickAct, children }) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggler = collapsed ? style.togglerIcon : style.togglerClose
  return (
    <>
      <button
        className={`navbar-toggler ${style.togglerBtn}`}
        type="button"
        data-toggle="collapse"
        data-target="#toggler"
        aria-controls="toggler"
        aria-expanded="false"
        aria-label="navegação"
        onClick={() => {
          onClickAct()
          setCollapsed(!collapsed)
        }}>

        <span className={`navbar-toggler-icon ${toggler}`} />

      </button>
      <div className={`collapse ${style.mobileNavLinks}`} id="toggler">
        {children}
      </div>
    </>
  )
}

export default TogglerNav

TogglerNav.propTypes = {
  onClickAct: PropTypes.func,
  children: PropTypes.node.isRequired
}
