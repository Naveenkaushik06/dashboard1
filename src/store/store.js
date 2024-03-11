import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import  totalEmployeeDataReducer from "./totalEmployeesDataSlice"

const store = configureStore({
  reducer: {
    employeeData: employeeReducer,
    totalEmployeeData: totalEmployeeDataReducer,
  },
});

export default store;
