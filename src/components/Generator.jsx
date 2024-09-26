import { useState } from "react";
import { WORKOUTS } from "../utilis/soldiers";
import SectionWrapper from "./SectionWrapper";

function Header(props) {
  const { index, title, description } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator() {
  // const { children } = props;

  const [showModal, setShowModal] = useState(false);
  let toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "Huge", " o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              className="bg-slate-950 border border-blue-400 py-3 rounded duration-200 hover:border-blue-600"
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annhilation"}
      />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          className="relative flex items-center justify-center p-3 "
          onClick={toggleModal}
        >
          <p>Select muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && <div>modal</div>}
      </div>
    </SectionWrapper>
  );
}
