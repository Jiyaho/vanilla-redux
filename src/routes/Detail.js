import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const toDos = useSelector((state) => state);

  const getId = useParams().id;
  //useParams: Router사용 시 해당 Route의 Parameter정보를 가져와 활용하는 Hook.
  //cf. App.js에서 <Route path="/:id" element={<Detail />} />
  //Detail Route의 Parameter인 id 값을 가져와 활용 가능한 것.

  const findToDo = toDos.find((todo) => todo.id === parseInt(getId));

  return (
    <div>
      <h1>{findToDo?.text}</h1>
      Create at: {findToDo?.id}
    </div>
  );
}
export default Detail;
