import React, {useState} from 'react';


const Lists= React.memo(({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick
}) => {


    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);


    const handleCompleteChange = (id) =>{
        let newTodoData = todoData.map(data =>{
          if(data.id===id){
            data.completed = !data.completed;
          }
          return data;
        })
        setTodoData(newTodoData);
        localStorage.setItem('todoData', JSON.stringify(newTodoData));
      };


      

/*       const handleClick = (id) =>{
        let newTodoData = todoData.filter(data => data.id !== id);
        console.log('newTodoData', newTodoData);
        setTodoData(newTodoData);
      }; */
    

      const btnStyle = {
        color : "#fff",
        border : "none",
        padding : "3px 9px",
        borderRadius : "50%",
        cursor : "pointer",
        float : "right",
        background : "#eee"
      };


    const getStyle = (completed) =>{
    return {
      padding : "10px",
      borderBottom : "1px #ccc dotted",
      textDecoration : completed ? "line-through" : undefined,
    }
  } 

  const handleEditChange = (event) =>{
    setEditedTitle(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();

    let newTodoData = todoData.map(data => {
      if(data.id===id){
        data.title = editedTitle
      }
      return data;
    })
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
    setIsEditing(false);

  }

  if(isEditing) {
    return(
      <div
        className={`flex items=center justify-between w-full px-4 py-1 my-2 bg-gray-100 text-gray-600 border rounded`}>
      <form onSubmit={handleSubmit}>
        <input 
        value={editedTitle}
        onChange={handleEditChange}
        className={"w-full px-3 py-2 mr-4 text-gray-500 rounded"}
        />
      </form>

        <button
        type="submit"
        onClick={handleSubmit}
        >
          Save</button>
      </div>
    )
  }else{
    return (
    
      <div style = {getStyle(completed)}
        key={id} 
        {...provided.draggableProps} 
        ref={provided.innerRef} 
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
      } flex items=center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
        >
          
        <input 
        type="checkbox" 
        defaultChecked={completed} 
        onChange={()=> handleCompleteChange(id)}
        />{" "}

        {title}
        <button style={btnStyle} onClick={()=> handleClick(id)}>X</button>
        <button style={btnStyle} onClick={()=> setIsEditing(true)}>Edit</button>
      </div>
  
);
  }


});

export default Lists;
