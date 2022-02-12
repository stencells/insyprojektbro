import * as React from "react"
import FooterMenu from "./FooterMenu"
import "../style/index.scss"

const Layout = (props) => {
  return (
      <>
    {props.children}
    <FooterMenu />
    </>
  )
}

export default Layout
