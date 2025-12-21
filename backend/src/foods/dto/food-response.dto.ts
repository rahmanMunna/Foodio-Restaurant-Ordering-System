/* eslint-disable prettier/prettier */
class Category {
    id: number;
    category: string;
}

export class FoodResponseDTO {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
    description: string;
    category: Category;
}
