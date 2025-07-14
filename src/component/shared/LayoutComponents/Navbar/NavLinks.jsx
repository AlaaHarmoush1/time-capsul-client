import NavItem from './NavItem'
import navItems from '../../../../data/layout/Navbar/navbarData'

const NavLinks = () => {
  return (
    <div className="nav-links flex flex-row gap-2 justify-center items-center align-middle align-center">

      {navItems.map((item, index) => (
          <NavItem key={index} location={item.to} text={item.label} device={"desktop"}/>
        ))}
      </div>
      
  )
}

export default NavLinks