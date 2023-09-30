import { useState, createContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const TodoListData = createContext([]);

const Mainlayout = () => {
  /**
   * false means light mode;
   */
  const [themeState, setThemeState] = useState(true);
  const [todoList, setTodoList] = useState([]);

  const handleThemeState = () => {
    setThemeState((prop) => !prop);
  };
  return (
    <div className={themeState ? "dark" : "light"}>
      <div className="w-full min-h-screen overflow-x-hidden bg-slate-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="container md:w-3/5 mx-auto p-2">
          <Navbar handleThemeState={handleThemeState} themeState={themeState} />
          <div className="md:w-4/5 mx-auto mt-2">
            <TodoListData.Provider value={[todoList, setTodoList]}>
              <Outlet />
            </TodoListData.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
