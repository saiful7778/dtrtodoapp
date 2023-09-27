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
        </div>
      </div>
    </div>
  )
}

export default App