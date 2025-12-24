'use client';

import { useState } from "react";
import toast from "react-hot-toast";
import { OrderService } from "../_services/order.service";

type Props = {
    orderId: number;
    currentStatusId: number;
    allStatus: { id: number; status: string }[];
};

export default function StatusSelect({
    orderId,
    currentStatusId,
    allStatus
}: Props) {
    const [statusId, setStatusId] = useState(currentStatusId);

    async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const newStatusId = Number(e.target.value);
        setStatusId(newStatusId);
        // toast.success("Status updated" + newStatusId);

        try {
            await OrderService.changeOrderStatus(orderId, newStatusId);
            toast.success("Status updated");
        } catch {
            toast.error("Failed to update status");
            setStatusId(currentStatusId); // rollback
        }
    }

    return (
        <select
            className="border-2 rounded-xl p-2"
            value={statusId}
            onChange={handleChange}

        >
            {allStatus.map((s) => (
                <option key={s.id} value={s.id}>
                    {s.status}
                </option>
            ))}
        </select>
    );
}
