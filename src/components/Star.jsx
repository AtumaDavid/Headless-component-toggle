// import React from "react";
// import Toggle from "./toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "../hooks/useToggle";

// eslint-disable-next-line react/prop-types
export default function Star({ onChange }) {
  const [on, toggle] = useToggle({ onToggle: onChange });
  return (
    // <Toggle onToggle={onChange}>
    //   <Toggle.Button>
    //     <Toggle.On>
    //       <BsStarFill className="star filled" />
    //     </Toggle.On>
    //     <Toggle.Off>
    //       <BsStar className="star " />
    //     </Toggle.Off>
    //   </Toggle.Button>
    // </Toggle>

    <>
      {on ? (
        <BsStarFill onClick={toggle} className="star filled" />
      ) : (
        <BsStar onClick={toggle} className="star" />
      )}
    </>
  );
}
