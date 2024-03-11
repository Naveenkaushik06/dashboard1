import React from "react";
import { useSelector } from "react-redux";

const FilteredEmployee = () => {
  const { filteredEmployeeData } = useSelector(
    (store) => store.totalEmployeeData
  );
  console.log(filteredEmployeeData);
  return (
    <div
      className="row employee-card-detail w-9/12 h-auto mt-4"
      style={{ maxWidth: "66rem" }}
    >
      {Array.isArray(filteredEmployeeData) &&
      filteredEmployeeData.length > null ? (
        filteredEmployeeData.map((data, id) => (
          <div className="col-md-6 bg-white -mt-10" key={data.empId}>
            <div className="card mb-1 -ml-5 employee-card-detai">
              <div className="row g-0 bg-gray-50">
                <div className="col-md-8">
                  <div className="card-body bg-green-0 w-96">
                    <h6 className="card-title">
                      <b>Name:</b> {data.empName}
                    </h6>
                    <p className="card-title">
                      <b>Email:</b> {data.empEmail}
                    </p>
                    <h6 className="card-title">
                      <b>ID:</b> {data.empId}
                    </h6>
                    <h6 className="card-title">
                      <b>Department:</b> {data.empDept}
                    </h6>
                    <h6 className="card-title">
                      <b>Phone: </b>
                      {data.empPhone}
                    </h6>
                    <h6 className="card-title">
                      <b>Address:</b> {data.empAddress}
                    </h6>

                    <h6 className="text-body-secondary">
                      <b>Branch: </b>
                      {data.employeeBranchEnum}
                    </h6>

                    <div className="flex justify-center ml-24">
                      <button
                        className="btn btn-success"
                        onClick={() => navigate("/viewemployeedetails")}
                      >
                        view
                      </button>
                      <button
                        className="btn btn-danger ml-1"
                        onClick={() => handleDeleteEmp(id)}
                      >
                        delete
                      </button>
                      <button
                        className="btn btn-info ml-1"
                        onClick={() => {
                          localStorage.setItem(
                            "updateEmployeeData",
                            JSON.stringify(data)
                          );
                          navigate("/addemployeeform");
                        }}
                      >
                        update
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    style={{
                      width: "90px",
                      margin: "25px 0px 0px 15px",
                      borderRadius: "10px",
                    }}
                    src={data.Picture}
                    className="img-fluid rounded-start card-img"
                    alt="..."
                  />
                </div>
                {/* <div className="flex justify-center ">
                    <button
                      className="btn btn-success"
                      onClick={() => navigate("/viewemployeedetails")}
                    >
                      view
                    </button>
                    <button
                      className="btn btn-info ml-1"
                      onClick={() => deleteData(data.id)}
                    >
                      delete
                    </button>
                  </div> */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{}}>
          <p>No employee data available</p>
        </div>
      )}
    </div>
  );
};

export default FilteredEmployee;
