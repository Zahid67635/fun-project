import "./App.css";
import Toggle from "./test";

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Active>Active</Toggle.Active>
        <Toggle.ToggleButton></Toggle.ToggleButton>
        <Toggle.InActive>InActive</Toggle.InActive>
      </Toggle>
    </>
  );
}

export default App;
