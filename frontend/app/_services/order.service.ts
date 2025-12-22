import api from "@/lib/axios";
import { PlaceOrder } from "../_types/OrderItems";

export const OrderService = {
    placeOrder: async (placeOrder: PlaceOrder) => {
        const res = await api.post("/order/place", placeOrder);
        return res.data;
    },
};
