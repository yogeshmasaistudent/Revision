import React from 'react'
function Todo() {
  return (
    <div>
        <div className='Todo'>
            <input name='Todo' type='text' onChange={handleChange}/>
            <button>ADD</button>
        </div>
    </div>
  )
}

export default Todo