import api from "@/lib/axios";

export const CategoryService = {
    getAll: async () => {
        const res = await api.get("/category/all");
        return res.data;
    },
    add: async (category: string) => {
        const res = await api.post("/category/add", { category });
        return res.data;
    }
};
