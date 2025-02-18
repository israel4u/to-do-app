import './App.css'
import { useState, useEffect } from 'react'
import ToDoItem from './components/ToDo'
import classes from './styles.module.css';
import TodoDetails from './components/TodoDetails';
// import { Skeleton } from '@mui/material';

function App() {

  const [loading, setLoading] = useState(false);
  const [ToDoList, setToDoList] = useState([]);
  const [ErrMsg, setErrMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchToDoList() {
    try {
      setLoading(true);
    const apiResponse = await fetch('https://dummyjson.com/todos');
    const result = await apiResponse.json();
    
    console.log(result);

    if(result?.todos && result?.todos.length > 0) {
      setToDoList(result?.todos)
      setLoading(false);
      setErrMsg('')
    } else {
      setToDoList([]);
      setLoading(false);
      setErrMsg('');
    }
    } catch (error) {
      console.log(error)
      setErrMsg('Something wen wrong.')
    }
  }

  // if(loading) return <Skeleton variant="rectangle" width={650} height={650} />

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
    console.log(getCurrentTodoId)

    try{
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`);
      const details = await apiResponse.json();

      console.log(details)

      if(details){
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails([]);
        setOpenDialog(false);
      }

    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchToDoList();
  }, [])


  return (
    <div className={classes.mainWrapper}>
      <h1 className="text-5xl font-bold text-cyan-600 mb-8">To-do App</h1>

      <div className={classes.todoListWrapper}>
        {
          ToDoList && ToDoList.length > 0 ?
          ToDoList.map((todoItem, index)=> <ToDoItem fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} todo={todoItem} key={index} />) : null
        }
      </div> 
      <TodoDetails 
        setOpenDialog={setOpenDialog} 
        openDialog={openDialog} 
        todoDetails={todoDetails} 
        setTodoDetails={setTodoDetails}
        />
    </div>
  )
}

export default App;
