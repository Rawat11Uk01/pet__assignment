import React, { useState } from "react";

const AddClientDialogue = ({ onClose, show, setTabledata, tableData }) => {
  const [inputStates, setInputStates] = useState({
    email: "",
    owner: "",
    pet: "",
    city: "",
  });
  const addHandler = (e) => {
    setInputStates({ ...inputStates, [e.target.name]: e.target.value });
  };
  const addUserHandler = () => {
    let temp = tableData.slice();
    temp.unshift(inputStates);
    const newId = Math.floor(Math.random() * 10000);
    const newObj = { ...inputStates, id: newId };
    temp[0] = newObj;
    setTabledata(temp);
    setInputStates({
      email: "",
      owner: "",
      pet: "",
      kind: "",
    });
    onClose();
  };

  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="content ">
        <h1 className="heading__medium500 textAlign__center mb20">
          Add Patient
        </h1>
        <div>
          <form className="grid grid_colums_2__1fr gap__20px">
            <div className="flex direction_column gap__10px">
              <label htmlFor="Email" className="heading__small">
                Email
              </label>
              <input
                id="Email"
                name="email"
                placeholder="Enter your email"
                className="input_style"
                value={inputStates?.email}
                onChange={(e) => addHandler(e)}
              />
            </div>
            <div className="flex direction_column gap__10px">
              <label htmlFor="Owner" className="heading__small">
                Owner Name
              </label>
              <input
                id="Owner"
                name="owner"
                placeholder="Enter owner name"
                className="input_style"
                value={inputStates?.owner}
                onChange={(e) => addHandler(e)}
              />
            </div>
            <div className="flex direction_column gap__10px">
              <label htmlFor="Kind" className="heading__small">
                Pet Kind
              </label>
              <input
                id="pet"
                name="pet"
                placeholder="Enter your  pet kind"
                className="input_style"
                value={inputStates?.pet}
                onChange={(e) => addHandler(e)}
              />
            </div>
            <div className="flex direction_column gap__10px">
              <label htmlFor="City" className="heading__small">
                City
              </label>
              <input
                id="City"
                name="city"
                placeholder="Enter your city"
                className="input_style"
                value={inputStates?.city}
                onChange={(e) => addHandler(e)}
              />
            </div>
          </form>
        </div>

        <div
          className="footer"
          style={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}
        >
          <button
            onClick={() => {
              onClose();
              setInputStates({
                email: "",
                owner: "",
                pet: "",
                kind: "",
              });
            }}
            className="btn__secondary"
          >
            Close
          </button>
          <button onClick={() => addUserHandler()} className="btn__secondary">
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClientDialogue;
