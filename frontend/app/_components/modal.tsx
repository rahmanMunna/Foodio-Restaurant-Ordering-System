'use client'

import { useState } from "react";
import { Food } from "../_types/Food";
import { OrderItems } from "../_types/OrderItems";

type FoodCardProps = {
    food: Food;
};
export default function Modal({ food }: FoodCardProps) {
    const [qty, setQty] = useState<number>(0)
    function handleConfirm(fId: number) {
        if (qty === 0) {
            alert("please Select 1 items")
            return;
        }
        const orderItems: OrderItems[] = [
            {
                foodId: fId,
                qty: qty
            }
        ]

        console.log(orderItems)


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