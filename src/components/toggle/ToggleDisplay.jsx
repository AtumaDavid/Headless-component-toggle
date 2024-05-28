import React from "react";
import { ToggleContext } from "./Toggle";

// eslint-disable-next-line react/prop-types
export default function ToggleDisplay({ children }) {
  const { on } = React.useContext(ToggleContext);

  return children(on);
}

// alternative to toggle on and off
