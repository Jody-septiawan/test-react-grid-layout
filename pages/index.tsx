import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import Box from "@mui/material/Box";

import ReactGridNoVerticalCompact from "../components/ReactGridNoVerticalCompact";

import { counter } from "../state/zustand";

export default function Home() {
  let count = counter((state: any) => state.count);
  let inc = counter((state: any) => state.inc);
  let dec = counter((state: any) => state.dec);

  return (
    <Box sx={{ px: 2 }}>
      {/* <CounterComponent count={count} inc={inc} dec={dec} /> */}
      {/* <ReactGridLayoutComponent /> */}
      <ReactGridNoVerticalCompact />
    </Box>
  );
}
