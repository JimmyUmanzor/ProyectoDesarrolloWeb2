'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoginData {
    idMaestro: string;
}

const LoginMaestro: React.FC = () => {
    const [loginData, setLoginData] = useState<LoginData>({ idMaestro: '' });
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Realizar la solicitud al backend para verificar si la ID existe
            const response = await fetch(`/api/maestros/${loginData.idMaestro}`);
            if (!response.ok) {
                throw new Error('Maestro no encontrado');
            }
            const maestro = await response.json();
            if (maestro) {
                // Si la ID es válida, redirige al calendario de actividades
                router.push('/calendario');
            } else {
                setError('Maestro no encontrado');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Error al iniciar sesión');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>Login de Maestro</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>ID Maestro:</label>
                    <input
                        type="text"
                        name="idMaestro"
                        value={loginData.idMaestro}
                        onChange={handleInputChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px' }}>
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
};

export default LoginMaestro;
