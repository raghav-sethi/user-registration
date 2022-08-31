import React from "react";

export default function Form(props) {
  const usernameChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const ageChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="container rounded mt-5 p-5 pt-4 pb-4 col-5 bg-light ">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername"
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAge" className="form-label">
            Age (Years)
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputAge"
            onChange={ageChangeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
}
