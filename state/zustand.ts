import create from "zustand";

const counter = create((set) => ({
  count: 0,
  inc: () => set((state: any) => ({ count: state.count + 1 })),
  dec: () => set((state: any) => ({ count: state.count - 1 })),
}));

const widget = create((set) => ({
  items: [
    {
      w: 2,
      h: 1,
      x: 1,
      y: 0,
      i: "__dropping-elem__",
      moved: false,
      static: false,
      isDraggable: true,
      elementType: "ButtonWidget",
    },
  ],
  change: (payload: any) => set((state: any) => ({ items: payload })),
}));

export { counter, widget };
