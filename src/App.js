import React, {useState} from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
/* 
  state = {
    
  todoData : [ */
/*     {
      id : "1",
      title : "공부하기",
      completed : false,
    },
    {
      id : "2",
      title : "청소하기",
      completed : false
    } */
/*   ],
  value:""
  }
 */
  const [todoData, setTodoData] =useState([]);
  const [value, setValue] = useState("");



/*   const getStyle = (completed) =>{
    return {
      padding : "10px",
      borderBottom : "1px #ccc dotted",
      textDecoration : completed ?  "line-through" : "none",
    }
  } */

/*   const btnStyle = {
    color : "#fff",
    border : "none",
    padding : "5px 9px",
    borderRadius : "50%",
    cursor : "pointer",
    float : "right"
  }; */




/*   const handleClick = (id) =>{
    let newTodoData = todoData.filter(data => data.id !== id);
    console.log('newTodoData', newTodoData);
    setTodoData(newTodoData)
  }; */

/*   const handleChange = (e) =>{
    setValue(e.target.value);
  }; */

  const handleSubmit = (e) =>{
    //form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title:value,
      completed:false
    }

    //원래 있던 할 일에 새ㅐ로운 할 일 더해주기
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  };


/* 
  const handleCompleteChange = (id) =>{
    let newTodoData = todoData.map(data =>{
      if(data.id===id){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
  } */


    return(
      <div className="container">
        <div className="todoBlock">
      <div className="title">
        <h1>할 일 목록</h1>
      </div>

      <List todoData={todoData} setTodoData={setTodoData}/>

      <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
{/*       {todoData.map(data => (
        
      <div style = {getStyle(data.completed)} key={data.id}>
        <input type="checkbox" defaultChecked={false} onChange={()=> handleCompleteChange(data.id)}/>
        {data.title}
        <button style={btnStyle} onClick={()=> handleClick(data.id)}>X</button>
      </div>
      ))} */}


{/*       <form style={{display:'flex'}} onSubmit={handleSubmit}>
        <input type= "text" name= "value" style={{flex:'10', padding:'5px'}}
        placeholder="해야 할 일을 입력하세요."
        value={value}
        onChange={handleChange}
        />

        <input
          type="submit"
          value="입력"
          className="btn"
          style={{flex:'1'}}
        />

      </form> */}

        </div>
      </div>
    );

}
