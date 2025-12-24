'use client';

import { redirect } from 'next/navigation';
import { AuthService } from "../_services/auth.service";

export default function Login() {
    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        signIn({ email, password });
    }

    type LoginPayload = {
        email: string;
        password: string;
    };

    async function signIn(payload: LoginPayload) {
        await AuthService.signIn(payload);
        const user = await AuthService.user();
        console.log(user);
        localStorage.setItem('role', user.role);
        localStorage.setItem('userId', user.sub.toString());
        if (user.role === 'admin') {
            redirect('/admin/orders/all');

        }
        else if (user.role === 'customer') {
            redirect('/customer/menu');
        }
    }


    return (
        <div className="card w-full text-black max-w-sm">
            <div className="card-body">
                <form onSubmit={handleLogin} action="" method="post">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input bg-white border-2" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input bg-white border-2" placeholder="Password" />
                    {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                    <button type='submit' className="btn btn-neutral mt-4 border-2 w-full">Login</button>
                </form>
            </div>
        </div>

    )
}

