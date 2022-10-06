import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../store";
import ToDo from "../components/ToDo";

function Home() {
  const [text, setText] = useState("");
  const toDo = useSelector((state) => state);
  // useSelector는 현재의 state를 받아오는데 사용
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDo.map((todo) => (
          <ToDo {...todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
