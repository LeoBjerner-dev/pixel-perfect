import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface DropDownButtonProps {
  label: string;
  options: string[];
}

export default function DropDownButton({ label, options }: DropDownButtonProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return;
    setOpen(false);
  };

  return (
    <>
      <Box
        ref={anchorRef}
        onClick={() => setOpen((prev) => !prev)}
        sx={{ display: "flex", alignItems: "center", gap: "2px", cursor: "pointer", userSelect: "none" }}
      >
        <Box>
          <Typography sx={{ fontSize: "11px", color: "grey", lineHeight: 1.2 }}>{label}</Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "black", lineHeight: 1.2 }}>
            {options[selectedIndex]}
          </Typography>
        </Box>
        <ArrowDropDownIcon sx={{ fontSize: "18px", color: "grey" }} />
      </Box>

      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal sx={{ zIndex: 1 }}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={() => handleMenuItemClick(index)}
                      sx={{ fontSize: "13px" }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
