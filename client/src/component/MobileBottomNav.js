import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import "./mobileBottomNav.css"
import ApplicationBtn from "./ApplicationBtn"
import { Link } from "react-router-dom"

export default function MobileBottomNav({ setShowBottomNav, setFirstLoad }) {
  const promotion_style = {
    background: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#c59b6d",
    paddingTop: "5px",
    paddingBottom: "5px",
  }
  return (
    <div className="mobileBottomNav">
      <ApplicationBtn />
      <div style={promotion_style}>申請成功可獲得高達1000現金券!!</div>
      <Box sx={{ color: "black" }}>
        <Link to="/application/form">
          <BottomNavigation
            showLabels
            onChange={() => {
              setShowBottomNav(false)
              setFirstLoad(false)
            }}
          >
            <BottomNavigationAction label="立即申請" />
          </BottomNavigation>
        </Link>
      </Box>
    </div>
  )
}
