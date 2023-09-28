import PropTypes from 'prop-types'
import { useContext } from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { TodoListData } from '../layout/Mainlayout';
import { useState } from 'react';

const TodoItem = ({ todoData }) => {
  const [todoList, setTodoList] = useContext(TodoListData);
  const [edit, setEdit] = useState(false);
  const { id, todoName } = todoData;

  const handleEdit = () => {
    const editedData = todoList?.map((ele) => ele.id === id ? { id: id, todoName: 'Edited' } : ele)
    setTodoList(editedData);
  }
  const handleDelete = () => {
    const deletedData = todoList.filter((ele) => ele.id !== id);
    setTodoList(deletedData);
  }

  const RenderEditInputField = () => {
    if (edit) {
      return (
        <>
          <input className='border border-color rounded-md py-1 px-2 bg-gray-200 dark:bg-gray-900' type="text" />
          <button onClick={handleEdit} className='btn uppercase bg-gray-100 dark:bg-gray-500 border border-gray-400' type="button">edit</button>
        </>
      )
    } else {
      return (
        <>
          <input className='input-check' type="checkbox" />
          <p>{todoName}</p>
        </>
      )
    }
  }

  return (
    <div className='todo-item'>
      <div className="flex-1 todo-data">
        <div className="flex w-full items-center gap-2">
          <RenderEditInputField />
        </div>
      </div>
      <div className="flex items-center gap-2 p-2">
        <button onClick={() => setEdit(prop => !prop)} className='icon-btn rounded-md border border-gray-500' type="button">
          <BiEdit size={15} />
        </button>
        <button onClick={handleDelete} className='icon-btn bg-red-800 text-white rounded-md' type="button">
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