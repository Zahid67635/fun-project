import { createContext, useState, useContext } from "react";

const ToggleContext = createContext();

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

const ToggleButton = () => {
  const { toggle, setToggle } = useContext(ToggleContext);

  return (
    <button type="radio" onClick={() => setToggle(!toggle)}>
      Toggle
    </button>
  );
};

const Active = () => {
  const { toggle } = useContext(ToggleContext);
  return toggle ? <p>Active</p> : null;
};

const InActive = () => {
  const { toggle } = useContext(ToggleContext);
  return !toggle ? <p>InActive</p> : null;
};

Toggle.ToggleButton = ToggleButton;
Toggle.Active = Active;
Toggle.InActive = InActive;

export default Toggle;
