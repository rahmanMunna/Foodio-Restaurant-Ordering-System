'use client'

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
        const res = await AuthService.signIn(payload);
        console.log(res);
    }


    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Foodio</h1>
                        <p className="py-6">
                            Premium flavors, delivered.
                        </p>
                    </div>
                    <div className="card w-full text-black max-w-sm">
                        <div className="card-body border-4">
                            <form onSubmit={handleLogin} action="" method="post">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input bg-white border-2" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input bg-white border-2" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

