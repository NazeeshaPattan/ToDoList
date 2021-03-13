import { useState } from "react";

const Iform = ({ task, setTask, history, setHistory }) => {
  const handleAdd = (event) => {
    //form input validation
    var form = document.querySelector(".needs-validation");
    event.preventDefault();
    event.stopPropagation();
    form.classList.add("was-validated");

    
    if (form.checkValidity()) {
      // Insert new todo in task state
      let val = document.querySelector("#todo").value;
      let preState = [];
      if (task != undefined) {
        preState = [...task, val];
        setTask(preState);
      } else {
        preState = [val];
        setTask([val]);
      }
      //Insert new history after insert
      //get new index of the todo inserted
      let newIndex = preState.length - 1;

      let newHistData = [];
      let newHist = [];

      //create new history data where the todo to be shown will be mentioed
      if (history[history.length - 1][0].length == 0) {
        newHistData = [newIndex];
      } else {
        newHistData = [...history[history.length - 1][0], newIndex];
      }
      // calculate undo and redo index of the new history
      let undo = history.length - 1;
      let redo = null;
      //prepare total history--  prev history data+current history data
      newHist = [newHistData, undo, redo];
      let Hist = [...history, newHist];
      //set history
      setHistory(Hist);

      //reset the form
      form.reset();
      form.classList.remove("was-validated");
    }
  };

  //undo method

  const handleUndo = (e) => {
    let prevUndo = history[history.length - 1][1];
    if (prevUndo != undefined) {
      let newHistData = history[prevUndo][0];
      let undo = history[prevUndo][1];
      let redo = history.length - 1;
      let newHist = [newHistData, undo, redo];
      let Hist = [...history, newHist];
      //set history
      setHistory(Hist);
    }
  };

  //redo method

  const handleRedo = (e) => {
    let prevRedo = history[history.length - 1][2];
    if (prevRedo != undefined) {
      let newHistData = history[prevRedo][0];
      let undo = history.length - 1;
      let redo = history[prevRedo][2];
      let newHist = [newHistData, undo, redo];
      let Hist = [...history, newHist];
      //set history
      setHistory(Hist);
    }
  };

  return (
    <div className="">
      <form
        className="row g-3 justify-content-center needs-validation mt-3"
        noValidate
      >
        <div className="input-group col-lg-6 col-sm-10">
          <input
            type="text"
            className="form-control"
            id="todo"
            placeholder="Add ToDo"
            required
          />
        <div className="input-group-append">
          <button className="btn btn-success" type="submit" onClick={handleAdd}>
            Add to list
          </button>
        </div>
      </div>
      </form>
      <div className="row justify-content-center mt-2">
        <div className="col-5 text-right">
          <button className="btn btn-info" onClick={handleUndo}>
            Undo <i class="fa fa-undo" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-5 text-left">
          <button className="btn btn-primary" onClick={handleRedo}>
            Redo <i class="fa fa-repeat" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Iform;
