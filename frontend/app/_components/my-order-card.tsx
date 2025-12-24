import Steps from './steps'

export default function MyOrdersCard({ order }) {
    console.log(order)
    return (
        <div className="card border-2 text-primary-content m-6 rounded-2xl">
            <div className="card-body space-y-2">
                <div className='flex justify-between'>
                    <div>
                        <h2 className="card-title">Order : #{order.id}</h2>
                        <p>Placed on {new Date(order.date).toDateString()}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h2 className='font-bold text-xl'>TK {order.total}</h2>
                        <p className={`border-2 p-2 rounded-3xl 
                            ${order.orderStatus.status === 'Completed' ? 'bg-green-900 text-white' :
                                order.orderStatus.status === 'Preparing' ? 'bg-yellow-500 text-white' :
                                    order.orderStatus.status === 'Ready' ? 'bg-blue-800 text-white' :
                                        'bg-yellow-800 text-white'}`}>
                            {order.orderStatus.status}
                        </p>
                    </div>

                </div>
                {/* Items */}
                <p>Items</p>
                {
                    order.orderDetails.map(od => {
                        return (
                            <div className='flex justify-between item' key={od.id}>
                                <p className='font-bold'>{od.qty} X {od.food.name}</p>
                                <p className='text-end'>Tk {od.orderPrice}</p>
                            </div>
                        )
                    })
                }
                <hr />
                <h2><span className='text-lg font-medium'>Delivering to : </span>{order.customer.address}</h2>
                {/* Steps remaining */}
                <div className='flex justify-center'>
                    <Steps orderStatus={order.orderStatus}></Steps>
                </div>
            </div>
        </div>
    )
}
