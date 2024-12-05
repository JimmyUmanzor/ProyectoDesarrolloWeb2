"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page2 = () => {
    const router = useRouter();

    useEffect(() => {
        // Verificar si el usuario está autenticado
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) { router.push("/Login");
            // Redirigir al login si no está autenticado
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated"); // Eliminar el token
        router.push("/2"); 
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Página Protegida</h1>
            <p className="text-center">
                Bienvenido. Solo puedes ver esta página si estás autenticado.
            </p>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>
                Cerrar Sesión
            </button>
        </div>
    );
};

export default Page2;
