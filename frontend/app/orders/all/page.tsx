// 'use cleint'

import { OrderService } from "@/app/_services/order.service";
import OrderDetailsModal from "../order-details-modal";
import OrderDetailBtnModal from "@/app/_components/order-details-btn-modal";
import StatusSelect from "@/app/_components/status-selection";

export default async function AllOrders() {
    const orders = await OrderService.getAllOrder();
    const allStatus = await OrderService.getAllOrderStatus();

    return (
        <div className="m-2">
            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr>
                        <th className="border p-2">Order Id</th>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Customer</th>
                        <th className="border p-2">Total</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((o) => (
                        <tr key={o.id}>
                            <td className="border p-2">{o.id}</td>
                            <td className="border p-2">{new Date(o.date).toLocaleString()}</td>
                            <td className="border p-2">{o.customer.fullName}</td>
                            <td className="border p-2">{o.total}</td>


                            <td>
                                {/* Only this is CSR */}
                                <StatusSelect
                                    orderId={o.id}
                                    currentStatusId={o.orderStatus.id}
                                    allStatus={allStatus}
                                />
                            </td>

                            <td className="border p-2">
                                <OrderDetailBtnModal o={o}></OrderDetailBtnModal>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
