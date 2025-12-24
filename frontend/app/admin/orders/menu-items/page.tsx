import { FoodService } from "@/app/_services/food.service"
import { Archive, Edit } from "@deemlol/next-icons";
import Link from "next/link";

export default async function MenuItems() {
    const foods = await FoodService.getAll();
    // console.log(foods)
    return (
        <div className="overflow-x-auto">
            <h1 className="p-2 border-b-2 mb-2 ml-2 font-bold text-2xl">Menu Items</h1>
            <div className="flex justify-between items-center">
                <div className="w-1/6 flex justify-center gap-2">
                    <Link href={'menu-items'} className="btn">Menu Items</Link>
                    <Link href={'categories'} className="btn">Categories</Link>
                </div>
                <div>
                    <Link className="btn bg-green-950 text-white rounded-4xl" href={''}> + Add Items</Link>
                </div>
            </div>
            <table className="table w-full border-collapse rounded-lg shadow-md bg-white">
                {/* head */}
                <thead>
                    <tr className="bg-white text-center text-gray-700">
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
                                        <Edit size={24} color="#FFFFFF" />
                                    </button>
                                    <button className="px-3 py-1 text-sm font-medium text-white transition">
                                        <Archive size={24} color="#ff0000" />
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
