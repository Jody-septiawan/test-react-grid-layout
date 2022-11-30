import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import Box from "@mui/material/Box";

import ReactGridNoVerticalCompact from "../components/ReactGridNoVerticalCompact";

export default function Home() {
  return (
    <Box sx={{ px: 2 }}>
      <ReactGridNoVerticalCompact />
    </Box>
  );
}
