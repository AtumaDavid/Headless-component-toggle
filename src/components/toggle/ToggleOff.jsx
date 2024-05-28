import React from "react";
import { ToggleContext } from "./Toggle";

// eslint-disable-next-line react/prop-types
export default function ToggleOff({ children }) {
  const { on } = React.useContext(ToggleContext);

  return on ? null : children;
}
