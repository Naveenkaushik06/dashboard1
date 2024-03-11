import { createSlice } from "@reduxjs/toolkit";
import setEmpData from "./totalEmployeesDataSlice"; 

const employeeSlice = createSlice({
  name: "employeeData",
  initialState: { listOfEmployee: [] },
  reducers: {
    addEmployee: (state, action) => {
      state.listOfEmployee.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      const { index } = action.payload;
      state.listOfEmployee = state.listOfEmployee.filter(
        (data, i) => i !== index
      );
    },
    updateEmployee: (state, action) => {
      const { dataId, updatedData } = action.payload;
      const index = state.listOfEmployee.findIndex(
        (data) => data.id === dataId
      );

      if (index !== -1) {
        state.listOfEmployee[index] = {
          ...state.listOfEmployee[index],
          ...updatedData,
        };
      }
    },
    // searchEmployee: (state, action) => {
    //   const { emp_id } = action.payload;
    //   state.searchResults = state.listOfEmployee.filter(
    //     (data) => data.EmpID === emp_id
    //   );
    // },
  },
});

export const { addEmployee, deleteEmployee, updateEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
