import Add from "./components/Add";
import Delete from "./components/Delete";
import Edit from "./components/Edit";
import Edit2 from "./components/Edit2";
import Main from "./components/Main";
import './components/Style.css'
import { Route, Routes } from "react-router";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Edit2" element={<Edit2 />} />
        <Route path="/Delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
