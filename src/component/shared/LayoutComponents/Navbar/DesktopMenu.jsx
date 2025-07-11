import LogoContainer from "../logoContainer"
import NavLinks from "./NavLinks"
import AuthButton from "./AuthButton"

const DesktopMenu = () => {
  return (
    <>
        <LogoContainer />
        <NavLinks />
        <AuthButton device={"desktop"}/>



    </>
  )
}

export default DesktopMenu