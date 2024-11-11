import "./App.css";
import Toggle from "./test";

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Active>Active</Toggle.Active>
        <Toggle.InActive>InActive</Toggle.InActive>
        <Toggle.ToggleButton>Active</Toggle.ToggleButton>
      </Toggle>
    </>
  );
}

export default App;
