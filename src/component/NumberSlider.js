import * as React from "react"

import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import { useMediaQuery } from "react-responsive"

export default function NumberSlider({
  max_value,
  step_value,
  setChangedValue,
}) {

  const isMobile = useMediaQuery({ query: "(max-width: 991px)" })
  const style = isMobile?{width:"80%"}:{width:"100%", minWidth: "600px"}
  return (
    <Box sx={style}>
      <Slider
        defaultValue={0}
        aria-label='Default'
        valueLabelDisplay='auto'
        max={max_value}
        sx={{
          color: "#c59b6d",
        }}
        step={step_value}
        onChange={(e) => {
          setChangedValue(e.target.value)
        }}
      />
    </Box>
  )
}
