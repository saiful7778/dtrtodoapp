import { useContext } from "react";
import { v4 as uid } from 'uuid';
import useInputState from "../hooks/useInputState";
import usePressEnter from "../hooks/usePressEnter"
import TodoItem from "../components/TodoItem";
import { TodoListData } from "../layout/Mainlayout";

const InputTodo = () => {
  const [todoList, setTodoList] = useContext(TodoListData);
  const [addTodoField, setAddTodoField] = useInputState('');

  const handleAddBtn = () => {
    setTodoList([...todoList, { id: uid().slice(0, 8), todoName: addTodoField }]);
    setAddTodoField('');
  }

  const pressEnter = usePressEnter(handleAddBtn);

  const renderTodoList = todoList.map((ele) => <TodoItem key={uid().slice(0, 8)} todoData={ele} />)


  return (
    <div><div className="container-box mt-4">
      <div className="flex gap-2">
        <input onKeyUp={pressEnter} value={addTodoField} onChange={(e) => setAddTodoField(e.target.value)} className="w-full flex-shrink border border-color rounded-md py-1 px-2 bg-gray-200 dark:bg-gray-900" type="text" placeholder="Add todos...." />
        <button onClick={handleAddBtn} className="btn btn-pri" type="button">add</button>
      </div>
    </div>
      {todoList.length > 0 ?
        <div className="container-box mt-2 space-y-2">
          {renderTodoList}
        </div> : ''
      }</div>
  )
}

export default InputTodo