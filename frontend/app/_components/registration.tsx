'use client'
import { useState } from "react";
import { AuthService } from "../_services/auth.service";
import { Customer } from "../_types/customer";
import { useRouter } from "next/navigation";

export default function Registration() {

    const [formData, SetFormData] = useState<Customer>({
        fullName: '',
        email: '',
        password: '',
        address: ''
    })

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await AuthService.register(formData);
            console.log(res);
            if (!res) {
                alert('Something Wrong, Cant Register')
                return
            }
            alert('Registration Successful')
            router.push('/login')
        }
        catch (err) {
            console.log(err)
            alert('Something Wrong, Cant Register')
        }

    }
    return (
        <div className="hero-content flex-col ">
            <div className="card w-full text-black max-w-sm">
                <h1 className="text-center text-3xl">Register</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit} action="" method="post">
                        <label className="label">Full Name</label>
                        <input value={formData.fullName} onChange={handleChange}
                            type="text" name='fullName' className="input bg-white border-2" placeholder="Md Munna" />

                        <label className="label">Email</label>
                        <input value={formData.email} onChange={handleChange}
                            type="email" name='email' className="input bg-white border-2" placeholder="name@example.com" />

                        <label className="label">Address</label>
                        <input value={formData.address} onChange={handleChange}
                            type="text" name='address' className="input bg-white border-2" placeholder="eg. House 23, Road 23, Jamaica, USA" />

                        <label className="label">Password</label>
                        <input value={formData.password} onChange={handleChange}
                            type="password" name='password' className="input bg-white border-2" placeholder="Password" />
                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        <button type='submit' className="btn btn-neutral mt-4 w-full">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
