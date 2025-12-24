import { CategoryService } from "./_services/category.service";
import { Category } from "./_types/category";
import FoodCards from "./_components/food-cards";
import Link from "next/link";
import Navbar from "./_layouts/navbar";
import Image from "next/image";
import home from '@/public/Home.png';

export default async function Home() {
  const categories: Category[] = await CategoryService.getAll();

  return (
    <>
      <div className="container mx-auto space-y-8">
        <div className="navbar bg-white px-4 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <Navbar></Navbar>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Foodio</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <Navbar></Navbar>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="btn bg-blue-500" href={'/login'}>Login</Link>
          </div>
        </div>
        <div>
          {/* Header */}
          <div className="flex container mx-auto justify-between items-center">
            <div className="">
              <h1 className="border-2 w-1/4 text-center rounded-2xl bg-rose-50 p-1 font-medium">Food Ordering Service</h1>
              <h1 className="text-6xl w-2/3">Where Great Food Meets Great Taste.</h1>
              <p className="text-sm w-2/3">
                Experience a symphony of flavors crafted with passion. Premium ingredients,
                exquisite recipes, delivered to your door.
              </p>
              <button className="btn rounded-lg bg-green-950 text-white">Order Now</button>
              <button className="btn rounded-lg text-green-950">View Menu</button>
            </div>
            <div className="bg-rose-50 rounded-4xl">
              <Image src={home} alt="Home Image" />
            </div>
          </div>

        </div>
        <div className="p-2 space-y-8 container mx-auto">
          <FoodCards categories={categories} />
        </div>
      </div>
    </>
  );
}
