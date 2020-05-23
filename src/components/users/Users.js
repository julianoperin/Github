import React from "react";
import UserItem from "./UserItem";

const Users = ({ users, loading }) => {
  if (loading) {
    return <h1>loading...</h1>;
  } else {
    return (
      <div className="media" style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
