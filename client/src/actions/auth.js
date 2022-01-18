import * as api from "../api";
import { AUTH } from "../constants/actionsTypes";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    //Login user...
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    //sign up user...
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
