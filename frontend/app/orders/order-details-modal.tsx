'use client'

import { useEffect, useState } from "react";
import { OrderService } from "../_services/order.service"

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

export default function OrderDetailsModal({ total, customer, orderId }) {
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
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                {
                    loading && <h1>Loading</h1>
                }
                {
                    !loading && <div className="modal-box bg-white">

                    <div className="modal-action flex flex-col">
                        <h1>Order Detail</h1>
                        <p>{orderId}</p>
                        <p>Address</p>
                        <p>{customer}</p>
                        <hr />
                        <h1>Items</h1>
                        {
                            orderDetails.map((od) => {
                                return (
                                    <div className="flex justify-between" key={od.id}>
                                        <p>{od.qty}x{od.food.name}</p>
                                        <p>{od.orderPrice}</p>
                                    </div>
                                );
                            })
                        }
                        <hr />
                        <div className="flex justify-between">
                            <p>Total</p>
                            <p>{total}</p>
                        </div>

                        <form className="flex justify-end gap-3" method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Cancel</button>
                        </form>
                    </div>
                </div>
                }
            </dialog></>
    )
}
