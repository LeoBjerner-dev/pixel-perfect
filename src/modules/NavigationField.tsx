import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Divider from "@mui/material/Divider";
import LogoText from "./LogoText";
import Box from "@mui/material/Box";
import SplitButton from "./DropDownButton";

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "white",
  border: "solid 1px lightgrey",
  width: "350px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

export default function SearchBar() {
  return (
    <Box sx={{ display: "flex", gap: "10px", p: "10px", alignItems: "center" }}>
      <LogoText />
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "lightgrey" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search any wine"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Box sx={{ display: "flex", gap: "10px", alignItems: "center", marginLeft: "auto" }}>
        <SplitButton label="Ship to" options={["Italy", "Sweden", "Germany"]} />
        <SplitButton label="Language" options={["English", "Italian", "Swedish"]} />
        <FormatSizeIcon sx={{ fontSize: "22px", color: "black" }} />
        <Divider orientation="vertical" flexItem sx={{ mx: "4px" }} />
        <PersonOutlinedIcon sx={{ fontSize: "22px", color: "black" }} />
        <ShoppingCartOutlinedIcon sx={{ fontSize: "22px", color: "black" }} />
      </Box>
    </Box>
  );
}