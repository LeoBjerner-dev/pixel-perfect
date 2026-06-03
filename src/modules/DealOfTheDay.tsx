import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";

export default function DealOfTheDay() {
  return (
    <Box sx={{ borderRadius: "16px", backgroundColor: "#c8c8c8", p: 4, display: "flex", alignItems: "center" }}>
      <Box sx={{ flex: 1 }}>
        <Chip label="Deal of the Day" sx={{ backgroundColor: "white", color: "black", fontWeight: 500, fontSize: "13px", mb: 2, borderRadius: "8px" }} />
        <Typography sx={{ fontSize: "32px", fontWeight: 700, color: "black" }}>
          Black Friday in June
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "white", borderRadius: "16px", p: 2, display: "flex", gap: 2, minWidth: 420 }}>
        <Box sx={{ position: "relative", backgroundColor: "#d0d0d0", borderRadius: "12px", width: 160, height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Chip label="-36%" sx={{ position: "absolute", top: 8, left: 8, backgroundColor: "#c0392b", color: "white", fontWeight: 700, fontSize: "12px" }} />
          <Typography sx={{ color: "#888", fontSize: "13px" }}></Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 1 }}>
          <Typography sx={{ fontSize: "13px", color: "#555" }}>Astrale</Typography>
          <Typography sx={{ fontSize: "17px", fontWeight: 700, color: "black" }}>Rosso N.V.</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <StarIcon sx={{ color: "#e67e22", fontSize: "16px" }} />
            <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>4.1</Typography>
            <Typography sx={{ fontSize: "12px", color: "#888" }}>(44405 ratings)</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "#c0392b" }}>€6.99</Typography>
            <Typography sx={{ fontSize: "14px", color: "#aaa", textDecoration: "line-through" }}>€10.95</Typography>
          </Box>
          <Button variant="contained" sx={{ backgroundColor: "#2e7d32", color: "white", borderRadius: "8px", textTransform: "none", fontWeight: 600, mt: 1, "&:hover": { backgroundColor: "#1b5e20" } }}>
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
