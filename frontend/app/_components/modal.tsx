'use client'

import { useState } from "react";
import { Food } from "../_types/Food";
import { OrderItems, PlaceOrder } from "../_types/OrderItems";
import { useRouter } from "next/navigation";
import { OrderService } from "../_services/order.service";
import toast from 'react-hot-toast';


type FoodCardProps = {
    food: Food;
};
export default function Modal({ food }: FoodCardProps) {
    const [qty, setQty] = useState<number>(0);
    const router = useRouter();
    async function handleConfirm(fId: number) {
        if (qty === 0) {
            alert("please Select 1 items")
            return;
        }
        const cIdStr = localStorage.getItem("cId");

        if (!cIdStr) {
            router.push("/login");
            return;
        }

        const cId = Number(cIdStr); // convert to number

        const orderItems: PlaceOrder = {
            customerId: cId,
            orderItems: [
                {
                    foodId: fId,
                    qty: qty
                }
            ],
        };

        const res = await OrderService.placeOrder(orderItems)
        toast.success("Order placed successfully 🎉");

        console.log(res)


    }
    function handleDecrement() {
        if (qty === 0) {
            return;
        }
        setQty(qty - 1);
    }
    function handleIncrement() {
        setQty(qty + 1)
    }
    return (
        <>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg">Are you sure Want to buy?</h3>
                    <p className="py-4">Items</p>
                    <div className=" flex justify-between">
                        <p className="py-4">{food.name}</p>
                        <div className="flex gap-2 items-center">
                            <button onClick={handleDecrement} className="btn btn-error">-</button>
                            <span>{qty}</span>
                            <button onClick={handleIncrement} className="btn btn-success">+</button>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form className="flex gap-3" method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Cancel</button>
                            <button onClick={() => handleConfirm(food.id)} className="btn">Confirm Order</button>
                        </form>
                    </div>
                </div>
            </dialog></>
    )
}