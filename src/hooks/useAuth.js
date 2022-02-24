import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



export const useAuthHook = () => useContext(AuthContext)