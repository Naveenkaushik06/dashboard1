import { Link, useNavigate } from "react-router-dom";
import HeadingCardRoom from "./HeadingCardRoom";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../store/employeeSlice";
import useFetchAllEmployeeData from "../hooks/useFetchAllEmployeeData";
import FilteredEmployee from "./FilteredEmployee";

const EmployeeCardsDetails = () => {
  const dispatch = useDispatch();
  const { listOfEmployee } = useSelector((store) => store.employeeData);
  // console.log(listOfEmployee);

  const navigate = useNavigate();

  const handleDeleteEmp = (index) => {
    dispatch(deleteEmployee({ index }));
  };
  localStorage.setItem("listOfEmployee", JSON.stringify(listOfEmployee));
  let retriveEmployeeData = JSON.parse(localStorage.getItem(listOfEmployee));

  const { empData } = useSelector((store) => store.totalEmployeeData);
  console.log(empData);
  const { filteredEmployeeData } = useSelector(
    (store) => store.totalEmployeeData
  );
  // console.log(filteredEmployeeData);
  // const {empId,empName,empEmail,empAddress,empPhone,empDept} = empData;

  return filteredEmployeeData.length !== 0 ? (
    <FilteredEmployee />
  ) : (
    <>
      <HeadingCardRoom />
      <div>
        <div
          className="row employee-card-detail w-9/12 h-auto mt-4"
          style={{ maxWidth: "66rem" }}
        >
          {Array.isArray(empData) && empData.length > null ? (
            empData.slice(0, 6).map((data, id) => (
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
              <p>No Filtered employee data available</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeeCardsDetails;
