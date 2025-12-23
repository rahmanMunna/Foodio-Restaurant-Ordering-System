import { CategoryService } from "./_services/category.service";
import { Category } from "./_types/category";
import FoodCards from "./_components/food-cards";
import CustomerLayout from "./_layouts/customer_layout";

export default async function Home() {
  const categories: Category[] = await CategoryService.getAll();

  return (
    <>
      <div className="">
        <div>
          <CustomerLayout></CustomerLayout>
        </div>
        <div className="p-2 space-y-8 container mx-auto">
          <FoodCards categories={categories} />
        </div>
      </div>
    </>
  );
}
