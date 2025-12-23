import { FoodService } from "@/app/_services/food.service"

export default async function MenuItems() {
    const foods = await FoodService.getAll();
    // console.log(foods)
    return (
        <div className="overflow-x-auto">
            <h1 className="p-2 border-b-2 mb-2 ml-2 font-bold text-2xl">Menu Items</h1>
            <table className="table w-full border-collapse rounded-lg shadow-md bg-white">
                {/* head */}
                <thead>
                    <tr className="bg-amber-200 text-center text-gray-700">
                        <th className="px-4 py-2">Id</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {foods.map((f) => {
                        return (
                            <tr
                                key={f.id}
                                className="hover:bg-amber-50 transition-colors duration-200 border-b"
                            >
                                <td className="px-4 py-2">{f.id}</td>
                                <td className="px-4 py-2 font-semibold text-gray-800">{f.name}</td>
                                <td className="px-4 py-2">{f.category.category}</td>
                                <td className="px-4 py-2 text-green-600 font-medium">${f.price}</td>
                                <td className="px-4 py-2">
                                    {f.isAvailable ? (
                                        <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                                            Available
                                        </span>
                                    ) : (
                                        <span className="px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full">
                                            Not Available
                                        </span>
                                    )}
                                </td>
                                <td className="flex justify-center gap-2 px-4 py-2">
                                    <button className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                                        Edit
                                    </button>
                                    <button className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
