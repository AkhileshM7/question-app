import React from 'react'
import { Box } from '@mui/material'

type perType = {
    percentage: Number
}
const PieChart = ({percentage}:perType):JSX.Element => {
  return (
    <Box
    sx={{
        background: `conic-gradient(green ${percentage}% ,red 0)`,
        borderRadius: "50%",
        width: "200px",
        height: "200px",
        display: "block",
        margin: "50px",
    }} >
       <div></div>
    </Box>
  )
}

export default PieChart;