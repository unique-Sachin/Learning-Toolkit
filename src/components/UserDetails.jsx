import React from "react";
import { DeleteAllUsers } from "./DeleteAllUsers";
import styled from "styled-components";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../store/slices/UserSlice";
import { MdDeleteForever } from "react-icons/md";

const UserDetails = () => {
  const { users } = useSelector((store) => store);
  const dispatch = useDispatch();
  const { addUser, removeUser, clearAllUsers } = userSlice.actions;
  const addNewUser = () => {
    const payload = fakeUserData();
    dispatch(addUser(payload));
  };
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={addNewUser}>
            Add New Users
          </button>
        </div>
        <ul>
          {users?.map((el, id) => (
            <li
              style={{
                textAlign: "left",
                backgroundColor: "pink",
                padding: "5px 10px",
                width: "40%",
                margin: "5px auto",
                borderRadius: "5px",
              }}
              key={id}
            >
              {el}
              <MdDeleteForever
                onClick={() => dispatch(removeUser(id))}
                style={{
                  fontSize: "23px",
                  color: "red",
                  float: "right",
                  cursor: "pointer",
                }}
              />
            </li>
          ))}
        </ul>
        <hr />
        <button onClick={() => dispatch(clearAllUsers())}>
          Clear All Users
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 0;
  }
  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }
  .admin-subtitle {
    font-size: 3.2rem;
  }
  .delete-btn {
    background-color: transparent;
    border: none;
  }
  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
