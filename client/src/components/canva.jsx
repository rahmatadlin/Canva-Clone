import React from "react";
import { useSelector } from "react-redux";
import useOnDraw from "./customHook";
const Canvas = () => {
  const height = useSelector((state) => state.height);
  const width = useSelector((state) => state.width);
  const Bcolor = useSelector((state) => state.B_color);
  const setCanvasRef = useOnDraw();
  return (
    <canvas
      id="canva1"
      height={height}
      width={width}
      style={{ backgroundColor: Bcolor }}
      ref={setCanvasRef}
      className="bg-white rounded-xl"
    />
  );
};

export default Canvas;
