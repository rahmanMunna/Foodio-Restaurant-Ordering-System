import api from "@/lib/axios";

export const FoodService = {
    getAll: async () => {
        const res = await api.get("/food/all");
        return res.data;
    },

    getAllByCategoryId: async (cId: number) => {
        const res = await api.get(`/food/category/${cId}`);
        return res.data;
    }
};
