import React from 'react'



const App = () => {

  function MyButton(){
    console.log("Hello!!!");
  }
  
  return (
    <div>
      <h1>App</h1>
      <button onClick={MyButton}>Button</button>
    </div>
  )
}

export default App