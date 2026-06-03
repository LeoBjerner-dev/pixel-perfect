import React from "react";
import MenuButtons from "./MenuButtons"
import Box from "@mui/material/Box";
import WineBarSharpIcon from '@mui/icons-material/WineBarSharp';
import PercentSharpIcon from '@mui/icons-material/PercentSharp';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import EggIcon from '@mui/icons-material/Egg';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AdsClickSharpIcon from '@mui/icons-material/AdsClickSharp';
import PrimarySearchAppBar from "./NavigationField"


const Header = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: 0, margin: 0 }}>
      <Box sx={{ maxWidth: "1200px", width: "100%", mx: "auto", px: 3 }}>
        <PrimarySearchAppBar />
      </Box>
      <Box sx={{ maxWidth: "1200px", width: "100%", mx: "auto", px: 3, py: 2, display: "flex", gap: "30px", justifyContent: "center" }}>
        <MenuButtons Icon={WineBarSharpIcon} title="Wine"/>
        <MenuButtons Icon={PercentSharpIcon} title="Offers"/>
        <MenuButtons Icon={BakeryDiningIcon} title="Pairings"/>
        <MenuButtons Icon={EggIcon} title="Grapes"/>
        <MenuButtons Icon={LocationPinIcon} title="Regions"/>
        <MenuButtons Icon={LocalParkingIcon} title="Premium"/>
        <MenuButtons Icon={AdsClickSharpIcon} title="Wineries"/>
      </Box>
    </Box>
  );
};

export default Header;
