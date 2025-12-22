import { FoodCardProps } from "../_types/Food";
import Modal from "./modal";

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <>
      <div className="card border-2 card-md">
        <div className="card-body">
          <h2 className="card-title">{food?.name}</h2>
          <p>{food?.description}</p>
          <p>Tk {food?.price}</p>
          <div className="justify-end card-actions">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Buy Now</button>
            <Modal food={food}></Modal>
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </>
  )
}