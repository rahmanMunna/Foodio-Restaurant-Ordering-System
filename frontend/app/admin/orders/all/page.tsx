import { OrderService } from "@/app/_services/order.service";
import StatusSelect from "@/app/_components/status-selection";
import OrderDetailBtnModal from "@/app/_components/order-details-btn-modal";


export default async function AllOrders() {
    const orders = await OrderService.getAllOrder();
    const allStatus = await OrderService.getAllOrderStatus();

    return (
        <div className="">
            <h1 className="p-2 border-b-2 mb-4 ml-2 text-2xl font-bold">
                Orders Items
            </h1>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse rounded-lg shadow-md bg-white">
                    <thead>
                        <tr className="bg-amber-200 text-gray-700 text-center">
                            <th className="px-4 py-2">Order Id</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Customer</th>
                            <th className="px-4 py-2">Total</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="text-center">
                        {orders.map((o, idx) => (
                            <tr
                                key={o.id}
                                className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } hover:bg-amber-50 transition-colors duration-200 border-b`}
                            >
                                <td className="px-4 py-2 font-medium text-gray-800">{o.id}</td>
                                <td className="px-4 py-2 text-gray-600">
                                    {new Date(o.date).toDateString()}
                                </td>
                                <td className="px-4 py-2">{o.customer.fullName}</td>
                                <td className="px-4 py-2 text-green-600 font-semibold">
                                    Tk {o.total}
                                </td>

                                <td className="px-4 py-2">
                                    {/* CSR controlled component */}
                                    <StatusSelect
                                        orderId={o.id}
                                        currentStatusId={o.orderStatus.id}
                                        allStatus={allStatus}
                                    />
                                </td>

                                <td className="px-4 py-2">
                                    <OrderDetailBtnModal o={o} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
