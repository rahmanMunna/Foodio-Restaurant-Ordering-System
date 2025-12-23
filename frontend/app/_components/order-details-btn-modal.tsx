'use client'

import OrderDetailsModal from "../orders/order-details-modal"

export default function OrderDetailBtnModal({ o }) {
    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_6').showModal()}>Detail</button>
            <OrderDetailsModal total={o.total} customer={o.customer.address} orderId={o.id}></OrderDetailsModal>

        </div>
    )
}
