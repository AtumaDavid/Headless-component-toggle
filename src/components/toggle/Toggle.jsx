import React from "react";
// import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";
import useToggle from "../../hooks/useToggle";

const ToggleContext = React.createContext();

// eslint-disable-next-line react/prop-types
export default function Toggle({ children, onToggle = () => {} }) {
  // useToggle
  // const [on, setOn] = React.useState(false);
  const [on, toggle] = useToggle({ initialValue: false, onToggle });

  // useEffectOnUppdate
  // const firstRender = React.useRef(true);

  // useToggle
  // function toggle() {
  //   setOn((prevOn) => !prevOn);
  // }

  // useEffectOnUppdate
  // React.useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //   } else {
  //     onToggle();
  //   }
  // }, [on, onToggle]); //The dependency array [on] ensures that the effect runs only when on changes, not on every render.

  // useToggle
  // useEffectOnUpdate(() => {
  //   onToggle();
  // }, [on]);

  // useEffectOnUpdate(onToggle, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
