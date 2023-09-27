import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  /**
   * false means light mode;
   */
  const [themeState, setThemeState] = useState(true);

  const handleThemeState = () => {
    setThemeState(prop => !prop);
  }

  return (
    <div className={themeState ? 'dark' : 'light'}>
      <div className="w-full min-h-screen overflow-x-hidden bg-slate-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="container md:w-3/5 mx-auto p-2">
          <Navbar handleThemeState={handleThemeState} themeState={themeState} />
          <div className="md:w-4/5 mx-auto">
            <div className="container-box mt-2">
              <div className="flex gap-2">
                <input className="w-full flex-shrink border border-color rounded-md py-1 px-2 bg-gray-200 dark:bg-gray-900" type="text" placeholder="Add todos...." />
                <button className="px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700 dark:text-gray-50 uppercase font-medium text-sm border border-color" type="button">add</button>
              </div>
            </div>
            <div className="container-box mt-2">
              first todos
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App