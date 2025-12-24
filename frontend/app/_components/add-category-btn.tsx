'use client'
import AddCategoryModal from './add-category-modal'

export default function AddCategoryBtn() {
  return (
    <div>
        <button className="btn bg-green-950 text-white rounded-4xl" onClick={() => document.getElementById('my_modal_10').showModal()}>+ Add Category</button>
        <AddCategoryModal></AddCategoryModal>
    </div>
  )
}
