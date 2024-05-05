export  function addTodo(todo){
    return{
        type:"ADD_TODO",
        payload:todo,
    }
}

export  function EditTodo(id,newText){
return {
    type:"EDIT_TODO",
    payload:{id,newText}
}
}

export  function DeleteTodo(id){
    return {
        type:"DELETE_TODO",
        payload:id,
    }
}