import React from 'react'

export default function App() {
  // const message = "hello girl"
  // const message1 = false;
  const todoList = ['learn reactjs', 'learn vuejs']

  return (
    <div>
      {
        todoList.map((item, index)=> {
          return <p key={index}>{item}</p>
        }) 
      }
    </div>
  )
}
