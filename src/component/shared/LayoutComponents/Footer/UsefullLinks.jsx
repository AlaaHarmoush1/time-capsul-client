import NavLinks from "./NavLinks"
import LinkGroups from "../../../../data/layout/Footer/FooterNavData"

const UsefullLinks = () => {
  return (
    <>
      {LinkGroups.map((group, index) => (
        <NavLinks
          key={index}
          title={group.title}
          path1={group.links[0].path}
          Link1={group.links[0].label}
          path2={group.links[1].path}
          Link2={group.links[1].label}
          path3={group.links[2].path}
          Link3={group.links[2].label}
        />
      ))}
    </>
  )
}

export default UsefullLinks