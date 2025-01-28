import "/src/App.css";

const App = () => {
  return (
    <div>
      <h1 className="text-4xl">To-Do List</h1>
      <div>
        <form action="">
          <label htmlFor="task">Add Task</label>
          <input className="border border-black" type="text" id="task" />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default App;
