import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Props {
  count: number;
  inc: () => void;
  dec: () => void;
}

const CounterComponent = React.memo(({ count, inc, dec }: Props) => {
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        {count}
      </Typography>
      <Box>
        <Button variant="contained" onClick={inc}>
          Add
        </Button>
        <Button variant="contained" onClick={dec}>
          Less
        </Button>
      </Box>
    </Box>
  );
});

export default CounterComponent;
