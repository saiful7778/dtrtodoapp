import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { PiMoonStarsBold } from 'react-icons/pi';
import { LuSunDim } from 'react-icons/lu';

const Navbar = ({ handleThemeState, themeState }) => {
  return (
    <nav className="flex items-center gap-4 justify-between container-box">
      <div className="flex gap-1 md:gap-4">
        <button className="flex flex-col justify-center items-center gap-1 w-8 h-8 rounded-md p-2 bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-color" type="button">
          <span className="w-4 h-0.5 rounded-sm bg-gray-700 dark:bg-gray-300"></span>
          <span className="w-4 h-0.5 rounded-sm bg-gray-700 dark:bg-gray-300"></span>
          <span className="w-4 h-0.5 rounded-sm bg-gray-700 dark:bg-gray-300"></span>
        </button>
        <div className="flex items-center relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500"><AiOutlineSearch /></div>
          <input className="w-full border border-color rounded-md pl-7 py-1 bg-gray-200 dark:bg-gray-900" type="text" placeholder="Search...." />
        </div>
      </div>
      <div className="flex items-center gap-1 md:gap-4">
        <button onClick={handleThemeState} className='w-8 h-8 inline-flex justify-center items-center rounded-full bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-color' type="button">
          {themeState ?
            <LuSunDim /> :
            <PiMoonStarsBold />
          }
        </button>
        <div className="w-8 h-8 border border-color rounded-full object-cover overflow-hidden">
          <img src="/user.jpeg" alt="" />
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  themeState: PropTypes.bool,
  handleThemeState: PropTypes.func
}

export default Navbar