import FoodCards from "../_components/food-cards"
import { CategoryService } from "../_services/category.service"
import { Category } from "../_types/category"

export default async function Menu() {
    const categories: Category[] = await CategoryService.getAll()
    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center">
                <h1>Our Menu</h1>
                <p>Discover our selection of premium dishes, crafted with passion.</p>
            </div>
            <FoodCards categories={categories} ></FoodCards>
        </div>
    )
}
