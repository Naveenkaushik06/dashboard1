import { createSlice } from "@reduxjs/toolkit";

const totalEmployeesDataSlice = createSlice({
  name: "totalEmployeeData",
  initialState: { empData: [] , filteredEmployeeData: []},
  reducers: {
    setEmpData: (state, action) => {
      state.empData = action.payload; 
    },
    setFilteredEmployeeData: (state,action) => {
      state.filteredEmployeeData = action.payload;
    }
  },
});

export const { setEmpData, setFilteredEmployeeData } = totalEmployeesDataSlice.actions;
export default totalEmployeesDataSlice.reducer;