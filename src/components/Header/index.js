import React from 'react'
import '../../assets/stylesheets/application.css';
import { Link } from 'react-router-dom'
import { displayHeaderAndFooterInIframe } from '../../utils/utils'

import { getQueryVariable } from '../../utils/utils'

export const Header = () => {
  const displayHeader = displayHeaderAndFooterInIframe()

  const jheHeaderStyle = {
    // width: '100px',
    // height: '102px',
    // marginTop: '22.5px',
    // backgroundPosition: '0px 0px'
  }

  const header = (
    <header className="header">
      <div className="container">
      <div className="logo"></div>
        {/* <Link className="logo" to={'?addr=' + getQueryVariable("addr") + '&networkID=' + getQueryVariable("networkID")} /> */}
        {/* <Link className="logo" to='/' style = {jheHeaderStyle}/>*/}
      </div>
    </header>
  )

  return displayHeader ? header : null
}
