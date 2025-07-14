import CreateCapsule from "../../shared/MainPages/CreateCapsule"
import CapsulePreview from "../../shared/MainPages/CapsulePreview"

const MainSection = () => {

  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4xl">
      <CreateCapsule />
      <CapsulePreview />
    

    </div>
  )
}

export default MainSection