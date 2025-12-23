'use client';

import { useRouter } from 'next/navigation';
import { AuthService } from "../_services/auth.service";

export default function Login() {
    const router = useRouter()
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
        const res = await AuthService.signIn(payload);
        console.log(res);
        // if (!res.data) {
        //     throw new Error('wrong')
        // }
        localStorage.setItem('role', res.role)
        localStorage.setItem('cId', res.customerId)
        localStorage.setItem('token', res.access_token)
        if (res.role === 'admin') {
            router.push('/admin/orders/all');
        }
        else if (res.role === 'customer') {
            router.push('/customer/menu');
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

