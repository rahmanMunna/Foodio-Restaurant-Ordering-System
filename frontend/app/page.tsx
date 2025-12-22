import { CategoryService } from "./_services/category.service";
import { Category } from "./_types/category";
import FoodCards from "./_components/food-cards";

export default async function Home() {
  const categories: Category[] = await CategoryService.getAll();

  return (
    <>
      <div className="p-5 space-y-8">
        <FoodCards categories={categories} />
      </div>
    </>
  );
}
