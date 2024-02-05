import "./App.css";
import Hook from "./AllHooks/Hook";
// import HookUseState from "./AllHooks/HookUseState";
// import HookUseEffect from "./AllHooks/HookUseEffect";
// import HookUseMemo from "./AllHooks/HookUseMemo";
// import HookUseCallback from "./AllHooks/HookUseCallback";
import HookUseRef from "./AllHooks/HookUseRef";

function App() {
  return (
    <div className="App">
      <Hook />
      {/* <HookUseState /> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseMemo/> */}
      {/* <HookUseCallback/> */}
      <HookUseRef/>
    </div>
  );
}

export default App;
