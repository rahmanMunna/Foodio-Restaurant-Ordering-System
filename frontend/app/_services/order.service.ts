import api from "@/lib/axios";
import { PlaceOrder } from "../_types/OrderItems";

export const OrderService = {
    placeOrder: async (placeOrder: PlaceOrder) => {
        const res = await api.post("/order/place", placeOrder);
        return res.data;
    },
    getAllOrder: async () => {
        const res = await api.get("/order/all");
        return res.data;
    },

    async getOrderDetailByOrderId(oId: number) {
        const res = await api.get(`/order-details/order/${oId}`);
        return res.data;
    },
    async getAllOrderByCustomerId(cId: number) {
        const res = await api.get(`order/customer/${cId}`);
        return res.data;
    }
};
