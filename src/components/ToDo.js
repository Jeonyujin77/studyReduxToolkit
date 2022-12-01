import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text} </Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(ownProps); // {text: 'hello', id: 1669878853040}
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
