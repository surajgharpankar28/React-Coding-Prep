import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  loading: false,
  formData: {
    name: "",
    email: "",
    phone: "",
    flatNo: "",
    streetArea: "",
    city: "",
    state: "",
    zip: "",
    // Merge with localStorage data if available
    ...(typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userForm") || "{}")
      : {}),
  },
  error: "",
  success: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    resetForm: (state) => {
      state.formData = {
        name: "",
        email: "",
        phone: "",
        flatNo: "",
        streetArea: "",
        city: "",
        state: "",
        zip: "",
      };
      state.currentStep = 1;
      state.error = "";
      state.success = "";
    },
  },
});

export const {
  setCurrentStep,
  setLoading,
  setFormData,
  setError,
  setSuccess,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
