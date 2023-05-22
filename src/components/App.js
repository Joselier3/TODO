import { TodoProvider } from "../contexts/TodoContext";
import { TodoPage } from "./TodoPage";

function App() {

  return (
    <TodoProvider>
      <TodoPage />
    </TodoProvider>
  );
}

export default App;
