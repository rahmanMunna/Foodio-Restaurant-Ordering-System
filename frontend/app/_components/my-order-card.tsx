import Steps from './steps'

export default function MyOrdersCard({ order }) {
    console.log(order)
    return (
        <div className="card border-2 text-primary-content m-6">
            <div className="card-body">
                <div className='flex justify-between'>
                    <div>
                        <h2 className="card-title">Order : #{order.id}</h2>
                        <p>Placed on {new Date(order.date).toDateString()}</p>
                    </div>
                    <div className='flex gap-3'>
                        <h2>TK {order.total}</h2>
                        <p className=''>{order.orderStatus.status}</p>
                    </div>

                </div>
                {/* Items */}
                <p>Items</p>
                {
                    order.orderDetails.map(od => {
                        return (
                            <div className='flex justify-between item' key={od.id}>
                                <p >{od.qty} X {od.food.name}</p>
                                <p className='text-end'>{od.orderPrice}</p>
                            </div>
                        )
                    })
                }
                <hr />
                <h2>Delivering to : {order.customer.address}</h2>
                {/* Steps remaining */}
                <div className='flex justify-center'>
                    <Steps orderStatus={order.orderStatus}></Steps>
                </div>
            </div>
        </div>
    )
}
