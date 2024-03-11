import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import ReactiveButton from "reactive-button";
import { useDispatch } from "react-redux";
// import axios from "axios";
import { addEmployee, updateEmployee } from "../store/employeeSlice";
import { POST_EMPLOYEE_DATA } from "../utils/constants";

const AddEmployeeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState("idle");
  const [updateData, setUpdateData] = useState(null);

  const name = useRef();
  const email = useRef();
  //const id = useRef();
  const dept = useRef();
  const address = useRef();
  const phone = useRef();
  const branch = useRef();
  // const picture = useRef();

  useEffect(() => {
    const updateEmployeeData = JSON.parse(
      localStorage.getItem("updateEmployeeData")
    );

    if (updateEmployeeData) {
      setUpdateData(updateEmployeeData);

      name.current.value = updateEmployeeData.name;
      email.current.value = updateEmployeeData.email;
      // id.current.value = updateEmployeeData.EmpID;
      dept.current.value = updateEmployeeData.Dept;
      address.current.value = updateEmployeeData.Address;
      phone.current.value = updateEmployeeData.Phone;
      branch.current.value = updateEmployeeData.Branch;
      // picture.current.value = updateEmployeeData.Picture;
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const empName = name.current.value;
    const empEmail = email.current.value;
    const empAddress = address.current.value;
    const empPhone = phone.current.value;
    const empDept = dept.current.value;
    const employeeBranchEnum = branch.current.value;
    // const imageData = picture.current.value;

    const empData = {
      empName,
      empEmail,
      empAddress,
      empPhone,
      empDept,
      employeeBranchEnum,
      // imageData,
    };
    console.log(empData);

    try {
      const data = await fetch(POST_EMPLOYEE_DATA, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(empData), // Assuming formData is defined elsewhere
      });
      // console.log(data);
      const json = await data.json().then((res) => console.log(res));
      // console.log(json);

      if (!updateData) {
        // Reset or update form fields
        name.current.value = "";
        email.current.value = "";
        dept.current.value = "";
        phone.current.value = "";
        address.current.value = "";
        branch.current.value = "";
        // picture.current.value = "";
      }
    } catch (error) {
      console.log("Error adding employee:", error);
    }

    // if (!updateData) {
    //   name.current.value = "";
    //   email.current.value = "";
    //   // id.current.value = "";
    //   dept.current.value = "";
    //   // branch.current.value = "";
    //   // picture.current.value = "";
    //   phone.current.value = "";
    //   address.current.value = "";
    // }

    // const reader = new FileReader();

    // reader.onloadend = () => {
    //   const empPicture = reader.result;

    if (localStorage.getItem("updateEmployeeData")) {
      const updateEmployeeData = JSON.parse(
        localStorage.getItem("updateEmployeeData")
      );
      dispatch(
        updateEmployee({
          dataId: updateEmployeeData.id,
          updatedData: {
            name: empName,
            email: empEmail,
            // EmpID: empId,
            Dept: empDept,
            Phone: empPhone,
            Address: empAddress,
            Branch: employeeBranchEnum,
            // Picture: imageData,
          },
        })
      );
      localStorage.removeItem("updateEmployeeData");
    } else {
      dispatch(
        addEmployee({
          name: empName,
          email: empEmail,
          // EmpID: empId,
          Dept: empDept,
          Phone: empPhone,
          Address: empAddress,
          Branch: employeeBranchEnum,
          // Picture: imageData,
        })
      );
    }
    navigate("/AttendancePath");
  };

  // reader.readAsDataURL(empPicture);

  return (
    <>
      <div style={{ float: "right", marginTop: "30px" }}>
        <h2 className="add-emp-form-heading pl-36">Add a new employee</h2>
        <form onSubmit={handleSubmit} className="pt-3 Add-emp-info">
          <label
            htmlFor="name"
            className="htmlForm-label "
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            <b className="required"> Name:</b>
          </label>
          <input
            style={{
              marginLeft: "20px",
              width: "70%",
              borderRadius: "6px",
            }}
            type="name"
            ref={name}
            className="name opacity-90 p-2 border-1 border-gray-600  outline-none required"
            id="name"
            placeholder="Enter name here..."
            required
          />

          <br />
          <label
            htmlFor="email"
            className="htmlForm-label required"
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            <b> Email:</b>
          </label>
          <input
            style={{ marginLeft: "20px", width: "70%", borderRadius: "6px" }}
            type="email"
            ref={email}
            className="gmail opacity-90 p-2 border-1 border-gray-600  outline-none"
            id="gmail"
            placeholder="Enter email here..."
            required
          />
          <br />
          <label
            htmlFor="role"
            className="htmlForm-label required"
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            <b> Depttt:</b>
          </label>
          <input
            style={{ marginLeft: "15px", width: "70%", borderRadius: "6px" }}
            type="text"
            ref={dept}
            className="role opacity-90 p-2 border-1 border-gray-600  outline-none"
            id="role"
            placeholder="Enter department here..."
            required
          />
          <br />
          <label
            htmlFor="role"
            className="htmlForm-label required"
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            <b>Address:</b>
          </label>
          <input
            style={{ marginLeft: "2px", width: "70%", borderRadius: "6px" }}
            type="address"
            ref={address}
            className="role opacity-90 p-2 border-1 border-gray-600  outline-none"
            id="role"
            placeholder="Enter address here..."
            required
          />
          <br />
          <label
            htmlFor="role"
            className="htmlForm-label required"
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            <b> Phone:</b>
          </label>
          <input
            style={{ marginLeft: "17px", width: "70%", borderRadius: "6px" }}
            type="tel"
            ref={phone}
            className="role opacity-90 p-2 border-1 border-gray-600  outline-none"
            id="role"
            placeholder="+91 Enter number  here..."
            required
          />
          <br />

          <label htmlFor="branch" className="mt-4 ml-7 required">
            <b> Select Branch:</b>
          </label>
          <select
            className="ml-2 p-1 border-1"
            id="branch"
            ref={branch}
            name="branch"
            defaultValue=""
          >
            <option value="" disabled hidden>Choose Branch</option>
            <option value="GURUGRAM">Gurgoan</option>
            <option value="RAIPUR">Raipur</option>
            <option value="BHOPAL">Bhopal</option>
          </select>
          <br />

          {/* <label htmlFor="role" className="htmlForm-label mt-4 ml-7 required">
            <b>Upload Picture:</b>
          </label>
          <input
            style={{ marginLeft: "15px", width: "70%", borderRadius: "6px" }}
            type="file"
            ref={picture}
            className="picture"
            id="picture"
            required
          /> */}

          {/* <center style={{ marginTop: "30px" }}>
            <ReactiveButton
              type="submit"
              buttonState={state}
              idleText="Add"
              loadingText="Loading"
              successText="Done"
              onClick={onClickHandler}
            />
          </center> */}

          <center style={{ marginTop: "30px" }}>
            <button type="submit">Add</button>
          </center>
        </form>
      </div>
    </>
  );
};
export default AddEmployeeForm;
