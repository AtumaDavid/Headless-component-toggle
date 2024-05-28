import React from "react";
import { ToggleContext } from "./Toggle";

// eslint-disable-next-line react/prop-types
export default function ToggleOn({ children }) {
  const { on } = React.useContext(ToggleContext);

  return on ? children : null;
}
