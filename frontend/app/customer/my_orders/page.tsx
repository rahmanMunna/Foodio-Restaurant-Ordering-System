"use client";

import { useEffect, useState } from "react";
import MyOrdersCard from "@/app/_components/my-order-card";
import { OrderService } from "@/app/_services/order.service";

export default function MyOrders() {
  const [myOrders, setMyOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const userId = Number(localStorage.getItem("userId"));
    if (userId) {
      OrderService.getAllOrderByCustomer(userId)
        .then((orders) => setMyOrders(orders))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl mb-4">My Orders</h1>

      {loading && (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="ml-3 text-gray-600">Loading your orders...</p>
        </div>
      )}

      {!loading && myOrders.length === 0 && (
        <p className="text-gray-500">No orders found.</p>
      )}

      {!loading &&
        myOrders.map((o) => <MyOrdersCard key={o.id} order={o} />)}
    </div>
  );
}