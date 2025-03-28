import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx + 1} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx + 1} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx + 1} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx + 1} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
