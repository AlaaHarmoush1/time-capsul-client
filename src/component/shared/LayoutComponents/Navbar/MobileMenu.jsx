import navItems from '../../../../data/layout/Navbar/navbarData'
import NavItem from './NavItem'
import AuthButton from './AuthButton'

const MobileMenu = () => {
  return (
    <div className="mobile-menu active flex flex-col align-center text-primary bg-white">
        {navItems.map((item, index) => (
          <NavItem key={index} location={item.to} text={item.label} device={"mobile"}/>
        ))}
        <AuthButton device={"Mobole"}/>
    </div>
  )
}

export default MobileMenu