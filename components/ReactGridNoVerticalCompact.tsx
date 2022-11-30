import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import _ from "lodash";
import * as React from "react";
import RGL, { WidthProvider } from "react-grid-layout";

import { widget } from "../state/zustand";

const ReactGridLayout = WidthProvider(RGL);

export default React.memo(function ReactGridNoVerticalCompact() {
  const [startDrag, setStartDrag] = React.useState(false);
  const [axis, setAxis] = React.useState({ x: 0, y: 0 });
  const [layoutElement, setLayoutElement] = React.useState({
    w: 0,
    h: 0,
    elementType: "",
  });

  let items = widget((state: any) => state.items);
  let change = widget((state: any) => state.change);

  let props = {
    className: "layout",
    items,
    cols: 12,
    rowHeight: 30,
  };

  function generateDOM() {
    return _.map(_.range(props?.items?.length), function (i: any) {
      if (items[i].elementType == "ButtonWidget") {
        return (
          <Button
            key={i}
            variant="contained"
            className="droppable-element"
            draggable={true}
            unselectable="on"
            onDragStart={() =>
              handleOnMoveWidget(items[i].xAxis, items[i].yAxis)
            }
            onDoubleClick={() => alert("delete")}
            sx={{ fontSize: 10 }}
          >
            Button Widget
          </Button>
        );
      }

      return (
        <Box
          key={i}
          sx={{
            border: "1px solid grey",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {items[i].elementType}
        </Box>
      );
    });
  }

  function generateLayout() {
    return _.map(new Array(props?.items?.length || 0), (_: any, i: any) => {
      return {
        x: props?.items[i].x,
        y: props?.items[i].y,
        w: props?.items[i].w,
        h: props?.items[i].h,
        i: i.toString(),
      };
    });
  }

  function onDrop(layout: any, layoutItem: any, _event: any) {
    if (startDrag) {
      items = items.map((item: any) => {
        if (item.x == axis.x && item.y == axis.y) {
          return {
            ...layoutItem,
            ...item,
            x: layoutItem.x,
            y: layoutItem.y,
          };
        }

        return item;
      });
    } else {
      items.push({
        ...layoutItem,
        ...layoutElement,
        x: layoutItem.x,
        y: layoutItem.y,
      });
    }

    change(items);
    setLayoutElement({
      w: 0,
      h: 0,
      elementType: "",
    });
  }

  function handleOnDragStart(elementType: string, h: number, w: number) {
    setStartDrag(false);
    setLayoutElement({ elementType, w, h });
  }

  function handleOnMoveWidget(x: any, y: any) {
    setAxis({ x, y });
    setStartDrag(true);
  }

  return (
    <Box sx={{ border: "1px solid grey", minHeight: 300, mt: 3, mb: 10, p: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box sx={{ border: "1px dashed grey" }}>
            <ReactGridLayout
              {...props}
              layout={generateLayout()}
              useCSSTransforms={false}
              onDrop={onDrop}
              isDroppable={true}
              compactType={null}
            >
              {generateDOM()}
            </ReactGridLayout>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            className="droppable-element"
            draggable={true}
            unselectable="on"
            onDragStart={() => handleOnDragStart("ButtonWidget", 1, 2)}
          >
            Button
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
});
