import { useMutation } from "@tanstack/react-query";
//useMutation is used for Post/put/patch/delete/request state
import { registerUserService } from "../services/authServices";
import { data } from "react-router-dom";
import { toast } from "react-toastify";

export const userRegisterUser =() => {
    return useMutation(
        {
            mutationFn:registerUserService, 
            mutationKey: ['register'],
            onSuccess: (data) => {
            toast.success(data?.message || "Registration successful");
            },
            onError:(err) => {
                toast.error(err?.message || "Register failed");
            }
        }
    );
};
