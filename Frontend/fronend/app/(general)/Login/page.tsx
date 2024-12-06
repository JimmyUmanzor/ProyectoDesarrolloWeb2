"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const [idUsuario, setIdUsuario] = useState<string>("");
    const [clave, setClave] = useState<string>("");
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Hacer una petición GET con el idUsuario
            const response = await fetch(`http://localhost:5000/usuarios/${idUsuario}`);

            if (response.ok) {
                const data = await response.json();
                
                // Validar si la clave coincide
                if (data && data.clave === clave) {
                    // Redirige a la página de actividades si el usuario y la clave son correctos
                    router.push("/actividades");
                } else {
                    setError("Credenciales incorrectas");
                }
            } else {
                const data = await response.json();
                setError(data.error || "Error al obtener usuario");
            }
        } catch (err) {
            setError("Error al conectar con el servidor");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg" style={{ width: "24rem" }}>
                <h6 className="card-title text-center mb-4">Recuerde que debe tener hijos matriculados</h6>
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Iniciar sesión</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="idUsuario" className="form-label">Usuario</label>
                            <input
                                type="text"
                                className="form-control"
                                id="idUsuario"
                                value={idUsuario}
                                onChange={(e) => setIdUsuario(e.target.value)}
                                placeholder="Ingresa tu usuario"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="clave" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="clave"
                                value={clave}
                                onChange={(e) => setClave(e.target.value)}
                                placeholder="Ingresa tu contraseña"
                                required
                            />
                        </div>
                        {error && (
                            <div className="alert alert-danger text-center" role="alert">
                                {error}
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
