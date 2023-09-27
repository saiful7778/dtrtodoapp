import { useState } from "react"
import { v4 as uid } from 'uuid';
import Navbar from "./components/Navbar"
import useInputState from "./hooks/useInputState";
import TodoItem from "./components/TodoItem";
import usePressEnter from "./hooks/usePressEnter";

const App = () => {
  /**
   * false means light mode;
   */
  const [themeState, setThemeState] = useState(true);
  const [addTodoField, setAddTodoField] = useInputState('');
  const [todoList, setTodoList] = useState([]);
  const handleThemeState = () => {
    setThemeState(prop => !prop);
  }

  const handleAddBtn = () => {
    setTodoList([...todoList, { id: uid(), todoName: addTodoField }]);
    setAddTodoField('')
  }

  const pressEnter = usePressEnter(handleAddBtn);


  const renderTodoList = todoList.map((ele) => <TodoItem key={uid()} todoData={ele} />)

  return (
    <div className={themeState ? 'dark' : 'light'}>
      <div className="w-full min-h-screen overflow-x-hidden bg-slate-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="container md:w-3/5 mx-auto p-2">
          <Navbar handleThemeState={handleThemeState} themeState={themeState} />
          <div className="md:w-4/5 mx-auto">
            <div className="container-box mt-4">
              <div className="flex gap-2">
                <input onKeyUp={pressEnter} value={addTodoField} onChange={(e) => setAddTodoField(e.target.value)} className="w-full flex-shrink border border-color rounded-md py-1 px-2 bg-gray-200 dark:bg-gray-900" type="text" placeholder="Add todos...." />
                <button onClick={handleAddBtn} className="px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700 dark:text-gray-50 uppercase font-medium text-sm border border-color" type="button">add</button>
              </div>
            </div>
            {todoList.length > 0 ?
              <div className="container-box mt-2 space-y-2">
                {renderTodoList}
              </div> : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App