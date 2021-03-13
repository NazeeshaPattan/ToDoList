import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Iform from "./Form";
import Show from "./Display";

function App() {
  const [task, setTask] = useState();
  let [history, setHistory] = useState([[[], null, null]]);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center topNav shadow">
        <div className="col-md-6 text-center">To Do List</div>
      </div>
      <div className="pt-4" style={{ margin: "auto" }}>
        <Iform
          task={task}
          setTask={setTask}
          history={history}
          setHistory={setHistory}
        />
        <Show
          task={task}
          setTask={setTask}
          history={history}
          setHistory={setHistory}
        />
      </div>
    </div>
  );
}

export default App;
