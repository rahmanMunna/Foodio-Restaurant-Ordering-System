import api from '@/lib/axios';
import React, { use, useState } from 'react'
import { CategoryService } from '../_services/category.service';

export default function AddCategoryModal() {

    const handleAddCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = new FormData(e.target as HTMLFormElement);
        const category = form.get('category') as string;
        if (!category) {
            alert('Category name is required');
            return;
        }

        // console.log({category});
        const res = await CategoryService.add(category);
        alert(`Category ${category} added successfully!`);
        console.log(res.data);

    }
    return (
        <div>
            <dialog id="my_modal_10" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <h1 className='text-2xl'>Add Category</h1>
                    <div className="modal-action">
                        <form onSubmit={handleAddCategory} className="w-full space-y-4" method="dialog">
                            <label htmlFor="category">Name</label>
                            <br />
                            <input type="text" name='category' placeholder="Category Name" className="w-full" />
                            <br />

                            {/* if there is a button in form, it will close the modal */}
                            <div className='text-end'>
                                <button className="btn ">Add Category</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div >
    )
}
