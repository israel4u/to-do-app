import './App.css'
import { useState, useEffect } from 'react'
import ToDoItem from './ToDo'

function App() {

  const [loading, setLoading] = useState(false);
  const [ToDoList, setToDoList] = useState([]);
  const [ErrMsg, setErrMsg] = useState(null);

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

  useEffect(()=> {
    fetchToDoList();
  }, [])


  return (
    <>
    <h1 className="text-5xl font-bold text-cyan-600 mb-8">To-do App</h1>

    <div>
      {
        ToDoList && ToDoList.length > 0 ?
        ToDoList.map((todoItem, index)=> <ToDoItem todo={todoItem} key={index} />) : null
      }
    </div> 
    </>
  )
}

export default App;
