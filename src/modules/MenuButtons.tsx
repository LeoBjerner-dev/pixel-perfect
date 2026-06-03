import React from 'react'
import Box from "@mui/material/Box";


interface IMenuButtons {
    Icon: React.ElementType;
    title: string;
}

const MenuButtons = ({Icon, title}: IMenuButtons) => {
  return (
    <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
        <Icon />
        <h3>{title}</h3>
    </Box>
  )
}

export default MenuButtons