import * as React from "react";

import Box from "@mui/material/Box";
import GridLayout from "react-grid-layout";

let layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: "c", x: 4, y: 0, w: 1, h: 2 },
];

export default React.memo(function ReactGridLayoutComponent() {
  return (
    <Box sx={{ mt: "20px" }}>
      <div>{JSON.stringify(layout)}</div>
      <Box sx={{ border: "1px dashed grey", mt: "20px" }}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          <Box key="a" sx={{ border: "1px dashed grey" }}>
            a
          </Box>
          <Box key="b" sx={{ border: "1px dashed grey" }}>
            b
          </Box>
          <Box key="c" sx={{ border: "1px dashed grey" }}>
            c
          </Box>
        </GridLayout>
      </Box>
    </Box>
  );
});
