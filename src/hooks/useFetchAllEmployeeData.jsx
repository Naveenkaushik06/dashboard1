import React, { useEffect, useState } from "react";
import { GET_ALL_EMPLOYEE_DATA } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setEmpData } from "../store/totalEmployeesDataSlice";
import axios from "axios";

const useFetchAllEmployeeData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  // http://localhost:8080/employee/all
  // const fetchData = async () => {
  //   const data = await fetch(GET_ALL_EMPLOYEE_DATA);
  //   const json = await data.json();
  //   console.log(json);
  //   dispatch(setEmpData(json));
  // };

  const fetchData = () => {
    const data = axios(GET_ALL_EMPLOYEE_DATA).then((res) =>
      dispatch(setEmpData(res.data))
    );
    console.log(data);
  };
  return <div></div>;
};

export default useFetchAllEmployeeData;
