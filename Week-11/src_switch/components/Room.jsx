import React, { useReducer } from "react";
import toggler from "../store/reducer";
import { store } from "../store/reducer";

const Room = (props) => {
  const tg = useReducer(store);

  const lightedness = props.store.isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={() => store.dispatch(toggler(toggle))}>flip</button>
    </div>
  );
};

export default Room;
