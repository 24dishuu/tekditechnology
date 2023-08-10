import Counter from "./components/Counter";
import ToDo from "./components/ToDo";
import Routing from "./routing/Routing";
import Toggle from "./components/Toggle";
import Timer from "./components/Timer";
import Formhandling from "./components/Formhandling";
import Conditional from "./components/Conditional";
import Fetch from "./components/Fetch";
import Authentication from './components/Authentication'
import DragandDrop from "./components/DragandDrop";
import ColorPicker from "./components/Colorpicker";


function App() {
  return (
    <div >
     <Counter/>
     <ToDo/>
     <Toggle />
    <Timer/>
    <Conditional/>
    <Fetch/>
    <Formhandling/>
     <Routing/>
    <Authentication/>
<DragandDrop/>
    <ColorPicker/>
    </div>
  );
}

export default App;
