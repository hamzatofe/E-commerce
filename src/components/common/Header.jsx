import Navbar from "./Navbar"
import Topbar from "./Topbar"

const Header = () => {
  return (
    <div className="border-b">
        <Topbar />
        <Navbar />
    </div>
  )
}

export default Header