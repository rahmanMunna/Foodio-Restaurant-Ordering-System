"use client"
import { AuthService } from '../_services/auth.service'
import { redirect } from 'next/navigation';

export default function LogoutBtn() {
    const handleLogout = async () => {
        const res = await AuthService.logout();
        if (res) {
            redirect('/')
        }
    }
    return (
        <button onClick={handleLogout} className="btn bg-red-600">Logout</button>
    )
}
