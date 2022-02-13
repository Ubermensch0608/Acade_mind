import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

const App = () => {
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
};

export default App;
