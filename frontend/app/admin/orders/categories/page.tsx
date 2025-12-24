import AddCategoryBtn from '@/app/_components/add-category-btn';
import AddCategoryModal from '@/app/_components/add-category-modal';
import { CategoryService } from '@/app/_services/category.service';
import { Archive, Edit } from '@deemlol/next-icons';
import Link from 'next/link';
import React from 'react'

export default async function Categories() {
    const categories = await CategoryService.getAll();
    return (
        <div className='overflow-x-auto'>
            <h1 className="p-2 border-b-2 mb-2 ml-2 font-bold text-2xl">Menu Items</h1>
            <div className="flex justify-between items-center">
                <div className="w-1/6 flex justify-center gap-2">
                    <Link href={'menu-items'} className="btn">Menu Items</Link>
                    <Link href={'categories'} className="btn">Categories</Link>
                </div>
                <div>
                    <AddCategoryBtn ></AddCategoryBtn>
                </div>
            </div>
            <table className="table w-full border-collapse rounded-lg shadow-md bg-white">
                {/* head */}
                <thead>
                    <tr className=" flex justify-between bg-white text-gray-700">

                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Actions</th>

                    </tr>
                </thead>
                <tbody className="text-center">
                    {categories.map((c) => {
                        return (
                            <tr className='flex justify-between' key={c.id}>
                                <td>{c.category}</td>
                                <td className="flex gap-2 px-4 py-2">
                                    <button className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                                        <Edit size={24} color="#FFFFFF" />
                                    </button>
                                    <button className="px-3 py-1 text-sm font-medium text-white transition">
                                        <Archive size={24} color="#ff0000" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
