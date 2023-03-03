import { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
// import useMediaQuery from "@mui/material/useMediaQuery"
// import { useTheme } from "@mui/material/styles"
import "./applicationBtn.css"
import ApplyForm from "./ApplyForm"
import ApplyAnimBtn from "./ApplyAnimBtn"
import MobileBottomNav from "./MobileBottomNav"
import { Link, useNavigate } from "react-router-dom"

export default function ApplicationBtn({
  isBannerBtn,
  isNavBtn,
  isAnimBtn,
  isAboutusBtn,
  isBottomNav,
  isApplyBtn,
}) {
  const [open, setOpen] = useState(false)
  // const theme = useTheme()
  // const fullScreen = useMediaQuery(theme.breakpoints.down("xl"))
  const navigate = useNavigate()

  const handleClickOpen = () => {
    // setOpen(true)
    navigate("/application")
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ zIndex: "10" }}>
      {/* register button */}

      {isAboutusBtn && (
        <button className="aboutus-btn-apply" onClick={handleClickOpen}>
          <span>立即申請</span>
        </button>
      )}

      {/* {isApplyBtn && (
        <button variant="contained" type="submit" className="apply-btn">
            立即申請
        </button>
      )} */}

      {isBannerBtn && (
        <button className="banner-btn-apply" onClick={handleClickOpen}>
          <span>立即申請</span>
        </button>
      )}

      {isNavBtn && (
        <Link to="/application/form">
          <Button
            className="btn-apply-modal"
            variant="none"
            // onClick={handleClickOpen}
          ></Button>
        </Link>
      )}

      {isAnimBtn && <ApplyAnimBtn open={handleClickOpen} />}
      {isBottomNav && (
        <div>
          <MobileBottomNav />
        </div>
      )}

      {/* pop up box */}
      <Dialog
        // fullScreen={fullScreen}
        // maxWidth={"lg"}
        // fullWidth
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          style={{ textAlign: "right" }}
        >
          <Button onClick={handleClose} autoFocus style={{ color: "#c59b6d" }}>
            X
          </Button>
        </DialogTitle>
        <DialogContent>
          <ApplyForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
      {/* end */}
    </div>
  )
}
