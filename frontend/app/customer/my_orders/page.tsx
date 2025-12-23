import MyOrdersCard from "@/app/_components/my-order-card";
import { OrderService } from "@/app/_services/order.service";

export default async function MyOrders() {
  const myOrders = await OrderService.getAllOrderByCustomerId(1);
  return (
    <div>
      {
        myOrders.map((o) => <MyOrdersCard key={o.id} order={o}></MyOrdersCard>)
      }
    </div>
  )
}
