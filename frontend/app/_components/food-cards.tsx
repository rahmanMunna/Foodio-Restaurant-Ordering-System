"use client";

import { useEffect, useState } from "react";
import { FoodService } from "@/app/_services/food.service";
import { Category } from "@/app/_types/category";
import { Food } from "@/app/_types/Food";
import FoodCard from "./food-card";

type Props = {
  categories: Category[];
};

export default function FoodCards({ categories }: Props) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(
    categories[0].id
  );
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadFoods = async () => {
      setLoading(true);
      const data = await FoodService.getAllByCategoryId(selectedCategoryId);
      setFoods(data);
      setLoading(false);
    };
    loadFoods();
  }, [selectedCategoryId]);


  return (
    <>

      {/* Categories */}
      <ul className="flex justify-center gap-10 ">
        {categories.map((c) => (
          <li
            className="btn rounded-3xl bg-amber-50 text-black"
            key={c.id}
            onClick={() => setSelectedCategoryId(c.id)}
            style={{
              cursor: "pointer",
              fontWeight: c.id === selectedCategoryId ? "bold" : "normal",
              backgroundColor: c.id === selectedCategoryId ? "#3B82F6" : "transparent",
              color: c.id === selectedCategoryId ? "#ffffff" : "#000000",
              padding: "0.25rem 0.5rem",
              
            }}
          >
            {c.category}
          </li>
        ))}
      </ul>

      {/* Foods */}
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-4 gap-4">
        {!loading &&
          foods.map((f) => (
            <FoodCard key={f.id} food={f}></FoodCard>
          ))}
      </div>
    </>
  );
}



