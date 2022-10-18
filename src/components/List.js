import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Lists from './Lists';


const List = React.memo(({todoData,setTodoData}) => {

  console.log('List Component')



  const handleEnd = (result) =>{
    console.log('result', result);

    if(!result.destination) return;
    const newTodoData = [...todoData]; // = Array.from(todoData) 혹은 todoData.slice()로 해도 된다.
    //1. 변경시키는 아이템을 배열에서 지워줍니다.
    //2. return 값으로 지워진 아이템을 잡아줍니다.

    const [reorderedItem] = newTodoData.splice(result.source.index, 1);
    //원하는 자리에 reorderItem을 insert 해줍니다.

    newTodoData.splice(result.destination.index, 0 , reorderedItem);
    setTodoData(newTodoData);

  }


  return (
    <div>
    <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId='todo'>
        {(provided) =>(
          <div {...provided.droppableProps} ref={provided.innerRef}>
          {todoData.map((data, index) => (
            <Draggable
            key={data.id}
            draggableId={data.id.toString()}
            index={index}
            >
            {(provided, snapshot) => ( 
              <Lists 
              key={data.id}
              id={data.id}
              title={data.title}
              completed={data.completed}
              todoData={todoData}
              setTodoData={setTodoData}
              provided={provided}
              snapshot={snapshot}
              />
     
          )}
         </Draggable>
      ))}
  {provided.placeholder}
      </div>
      )}
        </Droppable>
      </DragDropContext>
  </div>
  );
});

export default List;




