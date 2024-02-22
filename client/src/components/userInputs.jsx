import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../features/textbox-slice";
import { Icon } from "@iconify/react";

const Toolbox = () => {
  const initialHeight = useSelector((state) => state.height);
  const initialWidth = useSelector((state) => state.width);
  const initialcolor = useSelector((state) => state.B_color);
  const initalStroke = useSelector((state) => state.stroke);
  const current = useSelector((state) => state.canvaVal);
  const dispatch = useDispatch();

  const changeHeight = (val) => {
    dispatch(actions.setHeight(val));
  };
  const changeWidth = (val) => {
    dispatch(actions.setWidth(val));
  };

  const changeColor = (val) => {
    dispatch(actions.setColor(val));
  };
  const changePenColor = (val) => {
    dispatch(actions.setPencolor(val));
  };
  const changeStrokeWidth = (val) => {
    dispatch(actions.setStroke(val));
  };

  const download = async (current) => {
    if (!current) alert("draw something!");
    const image = current.toDataURL("image/jpg");
    const blob = await (await fetch(image)).blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "image.jpg";
    link.click();
  };

  return (
    <section className="flex flex-col gap-8">
      {/* <div className="bg-[#ffffff] rounded-xl w-[50%] paddingXShorter3 paddingYShorter3">
        <label>Enter Height:</label>
        <input
          type="number"
          name="height"
          value={initialHeight}
          onChange={(e) => {
            changeHeight(e.target.value);
          }}
        />
      </div>

      <div className="bg-[#ffffff] rounded-xl w-[50%] paddingXShorter3 paddingYShorter3">
        <label>Enter Width:</label>
        <input
          type="number"
          name="widht"
          value={initialWidth}
          onChange={(e) => {
            changeWidth(e.target.value);
          }}
        />
      </div> */}

      <div className="flex flex-col gap-4 bg-[#ffffff] rounded-xl paddingXShorter3 paddingYShorter3">
        <div className="flex justify-between">
          <h3 className="text-sm text-[#595959] font-normal ">
            Background Color
          </h3>
          <Icon icon="fluent-mdl2:color-solid" width={25} color="#A6A6A6" />
        </div>
        <input
          type="text"
          name="color"
          value={initialcolor}
          onChange={(e) => {
            changeColor(e.target.value);
          }}
          className="border w-full px-4 py-1 rounded-full"
        />
      </div>

      {/* color paint */}
      <div className="flex flex-col gap-4  bg-[#ffffff] rounded-xl paddingXShorter3 paddingYShorter3">
        <div className="flex justify-between">
          <h3 className="text-base text-[#595959] font-normal">
            Select The pen color
          </h3>
          <Icon icon="arcticons:simpledraw" width={25} color="#A6A6A6" />
        </div>
        <div>
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("red")}
            style={{ backgroundColor: "red" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("black")}
            style={{ backgroundColor: "black" }}
          />
          <button
            className="m-1 rounded-full border h-4 w-4"
            onClick={() => changePenColor("white")}
            style={{ backgroundColor: "white" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("blue")}
            style={{ backgroundColor: "blue" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("green")}
            style={{ backgroundColor: "green" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("purple")}
            style={{ backgroundColor: "purple" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("gray")}
            style={{ backgroundColor: "gray" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("pink")}
            style={{ backgroundColor: "pink" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("lightblue")}
            style={{ backgroundColor: "lightblue" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("#67DB78")}
            style={{ backgroundColor: "#67DB78" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("#DB679D")}
            style={{ backgroundColor: "#DB679D" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("#7867DB")}
            style={{ backgroundColor: "#7867DB" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("#099DA9")}
            style={{ backgroundColor: "#099DA9" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("#E56D14")}
            style={{ backgroundColor: "#E56D14" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("#F050EB")}
            style={{ backgroundColor: "#F050EB" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("#570303 ")}
            style={{ backgroundColor: "#570303 " }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("magenta")}
            style={{ backgroundColor: "magenta" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("pink")}
            style={{ backgroundColor: "pink" }}
          />
          <button
            className="m-1 rounded-full border-0 h-4 w-4"
            onClick={() => changePenColor("#495703")}
            style={{ backgroundColor: "#495703" }}
          />
        </div>
      </div>

      {/* size width stroke */}
      <div className="flex flex-col gap-4  bg-[#ffffff] rounded-xl paddingXShorter3 paddingYShorter3">
        <div className="flex justify-between">
          <h3 className="text-sm text-[#595959] font-normal ">Stroke width</h3>
          <Icon
            icon="material-symbols-light:stroke-full"
            width={25}
            color="#A6A6A6"
          />
        </div>
        <input
          type="number"
          value={initalStroke}
          name="swidth"
          onChange={(e) => changeStrokeWidth(e.target.value)}
          // style={{ width: "50px" }}
          className="border w-full px-4 py-1 rounded-full"
        />
      </div>

      {/* Download */}
      <button
        className="bg-white w-[60%] mx-auto p-3 rounded-lg hover:bg-black"
        onClick={() => download(current)}
      >
        <div className="flex justify-center gap-4">
          <h3 className="text-sm text-[#595959] font-normal">
            Download Result
          </h3>
          <Icon icon="ic:baseline-download" width={25} color="#A6A6A6" />
        </div>
      </button>
    </section>
  );
};

export default Toolbox;
