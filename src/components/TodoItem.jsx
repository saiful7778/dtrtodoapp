import PropTypes from 'prop-types'
import { BiEdit } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';

const TodoItem = ({ todoData }) => {

  const { id, todoName } = todoData;
  return (
    <div className='todo-item'>
      <div className="flex w-full flex-shrink items-center gap-2">
        <input className='input-check' type="checkbox" />
        <p>{todoName}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className='w-7 h-7 inline-flex justify-center items-center border border-gray-500 rounded-md' type="button">
          <BiEdit size={15} />
        </button>
        <button className='w-7 h-7 inline-flex justify-center items-center bg-red-800 text-white rounded-md' type="button">
          <FaTrashAlt size={15} />
        </button>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todoData: PropTypes.object
}

export default TodoItem