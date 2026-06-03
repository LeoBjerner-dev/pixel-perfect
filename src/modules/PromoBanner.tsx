import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

export default function PromoBanner() {
  return (
    <Box sx={{ position: "relative", borderRadius: "16px", backgroundColor: "#8B1A1A", overflow: "hidden", px: 4, py: 5, textAlign: "center" }}>
      <Box sx={{ position: "absolute", top: "-40px", left: "-60px", right: "-60px", bottom: "-40px", display: "flex", flexWrap: "wrap", gap: "16px", transform: "rotate(-20deg)", opacity: 0.12, pointerEvents: "none", overflow: "hidden", alignContent: "flex-start" }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <Typography key={i} sx={{ fontSize: "52px", fontWeight: 900, color: "white", whiteSpace: "nowrap", lineHeight: 1.3 }}>
            BLACK FRIDAY IN JUNE
          </Typography>
        ))}
      </Box>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Chip label="Black Friday in June" sx={{ backgroundColor: "black", color: "white", fontWeight: 600, fontSize: "13px", mb: 2 }} />
        <Typography sx={{ fontSize: "38px", fontWeight: 700, color: "white", lineHeight: 1.2, mb: 1 }}>
          Claim today's offer
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "white", mb: 0.5 }}>
          Best Price of the Year!
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", mb: 3 }}>
          Up to 50% on selected wines.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "white", color: "black", borderRadius: "30px", px: 4, py: 1, fontWeight: 600, fontSize: "15px", textTransform: "none", "&:hover": { backgroundColor: "#f0f0f0" } }}>
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}
