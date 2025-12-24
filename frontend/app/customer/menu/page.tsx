import FoodCards from "@/app/_components/food-cards"
import { CategoryService } from "@/app/_services/category.service"
import { Category } from "@/app/_types/category"


export default async function Menu() {
    const categories: Category[] = await CategoryService.getAll()
    return (
        <div className="space-y-6">
            <div className="flex text-green-950 flex-col items-center space-y-2">
                <h1 className="text-6xl">Our Menu</h1>
                
                <p>Discover our selection of premium dishes, crafted with passion.</p>
            </div>
            <FoodCards categories={categories} ></FoodCards>
        </div>
    )
}
