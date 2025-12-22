export type Food = {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
    description: string;
}
export type FoodCardProps = {
  food: Food;
};