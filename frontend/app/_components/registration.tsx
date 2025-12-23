import Link from "next/link"

export default function Registration() {
    return (
        <div className="hero-content flex-col ">
            <div className="card w-full text-black max-w-sm">
                <div className="card-body">
                    <form action="" method="post">
                        <label className="label">Full Name</label>
                        <input type="text" name='fullName' className="input bg-white border-2" placeholder="Md Munna" />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input bg-white border-2" placeholder="name@example.com" />

                        <label className="label">Address</label>
                        <input type="text" name='address' className="input bg-white border-2" placeholder="eg. House 23, Road 23, Jamaica, USA" />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input bg-white border-2" placeholder="Password" />
                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        <button type='submit' className="btn btn-neutral mt-4 w-full">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
