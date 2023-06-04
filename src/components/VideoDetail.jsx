import ReactPlayer from "react-player";
import { Stack, Box } from "@mui/material";

const VideoDetail = () => {
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
