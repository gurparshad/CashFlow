import {useState} from "react";
import {Link} from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import {Box, Typography, useTheme} from "@mui/material";
import FlexBetween from "@/components/styled-components/FlexBetween";

const Navbar = () => {
  const {palette} = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        {/* to give additional CSS we can use sx, so you can use the external css like this, if css property is not there in the prop list for that element. */}
        <PixIcon sx={{fontSize: "28px"}} />
        <Typography variant="h4" fontSize="16px">
          CashFlow
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{"&:hover": {color: palette.primary[100]}}}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{"&:hover": {color: palette.primary[100]}}}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
