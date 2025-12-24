'use client'

import OrderDetailsModal from "../admin/orders/order-details-modal"


export default function OrderDetailBtnModal({ o }) {
    const modalId = `order_modal_${o.id}`;

    return (
        <div>
            <button className="btn" onClick={() => document.getElementById(modalId)?.showModal()}>Detail</button>
            <OrderDetailsModal modalId={modalId} total={o.total} customer={o.customer.address} orderId={o.id} />

        </div>
    )
}
