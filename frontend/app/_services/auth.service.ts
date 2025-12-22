import api from "@/lib/axios";
import { User } from "../_types/user";
import { use } from "react";

export const AuthService = {
    signIn: async (user: User) => {
        const res = await api.post("/auth/signIn", user);
        return res.data;
    },
};
