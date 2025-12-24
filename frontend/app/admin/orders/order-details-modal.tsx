'use client'
import { OrderService } from "@/app/_services/order.service";
import { useEffect, useState } from "react";


export type Food = {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
    description: string;
};
export type OrderDetail = {
    id: number;
    qty: number;
    orderPrice: number;
    food: Food;
};

export default function OrderDetailsModal({ modalId, total, customer, orderId }: { modalId: string, total: number, customer: string, orderId: number }) {
    // const orderDetails = await OrderService.getOrderDetailByOrderId(orderId)
    const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const data = await OrderService.getOrderDetailByOrderId(orderId);
                console.log(data)
                setOrderDetails(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderId]);
    return (
        <>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle text-start">
                {loading && (
                    <div className="modal-box flex items-center justify-center">
                        <h1 className="text-lg font-semibold animate-pulse">Loading...</h1>
                    </div>
                )}

                {!loading && (
                    <div className="modal-box bg-white rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Order Details</h2>
                        <p className="text-sm text-gray-500 mb-4">Order ID: {orderId}</p>

                        <div className="space-y-2 mb-4">
                            <h3 className="font-semibold">Customer</h3>
                            <p className="text-gray-700">{customer}</p>
                        </div>

                        <div className="border-t pt-4 mb-4">
                            <h3 className="text-lg font-semibold mb-2">Items</h3>
                            <div className="space-y-2">
                                {orderDetails.map((od) => (
                                    <div
                                        className="flex justify-between text-gray-700"
                                        key={od.id}
                                    >
                                        <p>
                                            {od.qty} × <span className="font-medium">{od.food.name}</span>
                                        </p>
                                        <p className="font-semibold">{od.orderPrice}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t pt-4 mb-6 flex justify-between text-lg font-bold">
                            <p>Total</p>
                            <p>{total}</p>
                        </div>

                        <div className="modal-action flex justify-end gap-3">
                            <form method="dialog">
                                <button className="btn btn-outline">Close</button>
                            </form>
                            
                        </div>
                    </div>
                )}
            </dialog>
        </>
    )
}
