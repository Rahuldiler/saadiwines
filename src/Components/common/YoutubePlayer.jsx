import {
  Button,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import { COLORS } from "../utils/ConstantTheme";
import { useTheme } from "@emotion/react";
const { default: ReactPlayer } = require("react-player");

const PopupPlayer = ({ url, closePopup }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="relative w-max">
      <IconButton
        sx={{ position: "absolute", right: 0, top: -40, colorScheme: "light" }}
        edge="end"
        onClick={closePopup}
        aria-label="close"
      >
        <CloseIcon color={COLORS.white} />
      </IconButton>
      {url == null ? (
        <Box sx={{ p: 4, background: "#fff" }}>
          <Typography variant="h5" sx={{ px: 4, py: 0 }}></Typography>
          {/* <Divider /> */}
          <Typography variant="body1" sx={{ px: 4, py: 2 }}>
            Live Stream is not yet started!
          </Typography>
          {/* <Button
            onClick={closePopup}
            sx={{
              px: 4,
              pb:2,
              float: "right",
              fontSize: "16px",
              color: COLORS.primary,
            }}
          >
            Okay
          </Button> */}
        </Box>
      ) : (
        <div className="player-wrapper border">
          <ReactPlayer
            className="react-player"
            width={isMobile ? "100%" : "640px"}
            height={isMobile ? "100%" : "360px"}
            url={url}
            controls
          />
        </div>
      )}
    </div>
  );
};

export default PopupPlayer;
