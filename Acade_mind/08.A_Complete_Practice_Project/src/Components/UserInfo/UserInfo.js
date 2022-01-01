import React from "react";
import "./UserInfo.css";

const UserInfo = (props) => {
  console.log(props.getUserInfo);

  const newUserInfo = props.getUserInfo.map((userInfo) => {
    const deleteHandler = (e) => {
      console.log(e.target);
      if (userInfo.key === e.target.key) {
        return e.target.remove();
      }
    };

    return (
      <li className="user-info" onClick={deleteHandler}>
        <span className="user-info__name">Name: {userInfo.name}</span>
        <span className="user-info__age">Age: {userInfo.age}</span>
      </li>
    );
  });

  return <ul className="user-Info-holder">{newUserInfo}</ul>;
};

export default UserInfo;
