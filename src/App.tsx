import './App.css'
import Box from "@mui/material/Box";
import Header from "./modules/Header";
import PromoBanner from "./modules/PromoBanner";
import DealOfTheDay from "./modules/DealOfTheDay";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3, display: "flex", flexDirection: "column", gap: 3, mt: 2 }}>
        <PromoBanner />
        <DealOfTheDay />
      </Box>
    </>
  )
}

export default App
