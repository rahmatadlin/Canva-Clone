import React from "react";
import Canvas from "../../components/canva";
import Toolbox from "../../components/userInputs";

const Paint = () => {
  return (
    <>
      <section className="w-full flex justify-between gap-4 bg-[#d3d2cd] paddingX paddingYShorter3 pb-10">
        <div className="w-[30%] gap-4 rounded-xl bg-[#e6e7e1] paddingXShorter paddingYShorter flex flex-col items-center">
          <Toolbox />
          <div className="bg-white w-full rounded-lg p-4 flex flex-col gap-4">
            <p className="text-sm text-[#595959] font-normal">Who in room :</p>
            <div className="flex justify-start items-center">
              <p className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></p>
              <p className="text-sm text-[#595959] font-normal">
                jhonny@mail.com
              </p>
            </div>
            <div className="flex justify-start items-center">
              <p className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></p>
              <p className="text-sm text-[#595959] font-normal">
                dzul@mail.com
              </p>
            </div>
          </div>
        </div>
        {/* canvas here */}
        <div className="w-[70%] rounded-xl bg-[#e6e7e1] paddingXShorter paddingYShorter">
          <Canvas />
        </div>
      </section>
    </>
  );
};

export default Paint;
