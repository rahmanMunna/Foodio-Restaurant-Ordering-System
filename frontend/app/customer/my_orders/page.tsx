import MyOrdersCard from "@/app/_components/my-order-card";
import { OrderService } from "@/app/_services/order.service";

export default async function MyOrders() {
  const myOrders = await OrderService.getAllOrderByCustomer();
  return (
    <div>
      <h1 className="text-3xl ml-5">My Orders</h1>
      {
        myOrders.map((o) => <MyOrdersCard key={o.id} order={o}></MyOrdersCard>)
      }
    </div>
  )
}
