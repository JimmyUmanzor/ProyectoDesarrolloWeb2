'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

interface Actividad {
    id: number;
    idUsuario: string;
    idAlumno: string;
    fechaActividad: string;
    descripcion: string;
    tipoActividad: string;
}

const localizer = momentLocalizer(moment);

const ActividadesCalendario: React.FC = () => {
    const [actividades, setActividades] = useState<Actividad[]>([]);
    const [nuevaActividad, setNuevaActividad] = useState<Partial<Actividad>>({
        idUsuario: 'U003',
        idAlumno: 'A001',
        fechaActividad: '',
        descripcion: '',
        tipoActividad: 'Tareas',
    });
    const [actividadSeleccionada, setActividadSeleccionada] = useState<Actividad | null>(null);

    useEffect(() => {
        const fetchActividades = async () => {
            try {
                const response = await fetch('http://localhost:5000/actividades');
                const data: Actividad[] = await response.json();
                setActividades(data);
            } catch (error) {
                console.error('Error al obtener actividades:', error);
            }
        };
        fetchActividades();
    }, []);

    const handleInputChangeNueva = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNuevaActividad({ ...nuevaActividad, [name]: value });
    };

    const handleAgregarActividad = async () => {
        try {
            const response = await fetch('http://localhost:5000/actividades', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevaActividad),
            });
            if (response.ok) {
                const actividadCreada = await response.json();
                setActividades([...actividades, actividadCreada]);
                setNuevaActividad({
                    idUsuario: 'U003',
                    idAlumno: 'A001',
                    fechaActividad: '',
                    descripcion: '',
                    tipoActividad: 'Tareas',
                });
            }
        } catch (error) {
            console.error('Error al agregar actividad:', error);
        }
    };

    const handleSeleccionarActividad = (actividad: Actividad) => {
        setActividadSeleccionada(actividad);
    };

    const handleInputChangeSeleccionada = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        if (!actividadSeleccionada) return;
        const { name, value } = e.target;
        setActividadSeleccionada({ ...actividadSeleccionada, [name]: value });
    };

    const handleGuardar = async () => {
        if (actividadSeleccionada) {
            try {
                const response = await fetch(
                    `http://localhost:5000/actividades/${actividadSeleccionada.id}`,
                    {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(actividadSeleccionada),
                    }
                );
                if (response.ok) {
                    const actividadActualizada = await response.json();
                    setActividades(
                        actividades.map((act) =>
                            act.id === actividadActualizada.id ? actividadActualizada : act
                        )
                    );
                    setActividadSeleccionada(null);
                }
            } catch (error) {
                console.error('Error al actualizar actividad:', error);
            }
        }
    };

    const handleEliminar = async () => {
        if (actividadSeleccionada) {
            try {
                const response = await fetch(
                    `http://localhost:5000/actividades/${actividadSeleccionada.id}`,
                    {
                        method: 'DELETE',
                    }
                );
                if (response.ok) {
                    setActividades(actividades.filter((act) => act.id !== actividadSeleccionada.id));
                    setActividadSeleccionada(null);
                }
            } catch (error) {
                console.error('Error al eliminar actividad:', error);
            }
        }
    };

    const eventos = actividades.map((actividad) => ({
        title: actividad.descripcion,
        start: new Date(actividad.fechaActividad),
        end: new Date(new Date(actividad.fechaActividad).getTime() + 60 * 60 * 1000), // 1 hora de duración
        actividad,
    }));

    return (
        <div style={{ padding: '20px' }}>
            <h1>Calendario de Actividades</h1>

            <div
                style={{
                    padding: '20px',
                    marginBottom: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <h2>Agregar Nueva Actividad</h2>
                <div>
                    <label>Descripción:</label>
                    <input
                        type="text"
                        name="descripcion"
                        value={nuevaActividad.descripcion || ''}
                        onChange={handleInputChangeNueva}
                        style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
                    />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <label>Fecha:</label>
                    <input
                        type="datetime-local"
                        name="fechaActividad"
                        value={nuevaActividad.fechaActividad || ''}
                        onChange={handleInputChangeNueva}
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <label>Tipo de Actividad:</label>
                    <select
                        name="tipoActividad"
                        value={nuevaActividad.tipoActividad || ''}
                        onChange={handleInputChangeNueva}
                        style={{ marginLeft: '10px', padding: '5px' }}
                    >
                        <option value="Tareas">Tareas</option>
                        <option value="Examen">Examen</option>
                        <option value="Actividad de Campo">Actividad de Campo</option>
                    </select>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button
                        onClick={handleAgregarActividad}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#4caf50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Agregar
                    </button>
                </div>
            </div>

            <Calendar
                localizer={localizer}
                events={eventos}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={(event) => handleSeleccionarActividad(event.actividad)}
            />

            {actividadSeleccionada && (
                <div
                    style={{
                        marginTop: '20px',
                        padding: '20px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <h2>Editar / Eliminar Actividad</h2>
                    <div>
                        <label>Descripción:</label>
                        <input
                            type="text"
                            name="descripcion"
                            value={actividadSeleccionada.descripcion}
                            onChange={handleInputChangeSeleccionada}
                            style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
                        />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <label>Fecha:</label>
                        <input
                            type="datetime-local"
                            name="fechaActividad"
                            value={actividadSeleccionada.fechaActividad}
                            onChange={handleInputChangeSeleccionada}
                            style={{ marginLeft: '10px', padding: '5px' }}
                        />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <label>Tipo de Actividad:</label>
                        <select
                            name="tipoActividad"
                            value={actividadSeleccionada.tipoActividad}
                            onChange={handleInputChangeSeleccionada}
                            style={{ marginLeft: '10px', padding: '5px' }}
                        >
                            <option value="Tareas">Tareas</option>
                            <option value="Examen">Examen</option>
                            <option value="Actividad de Campo">Actividad de Campo</option>
                        </select>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <button
                            onClick={handleGuardar}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4caf50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Guardar
                        </button>
                        <button
                            onClick={handleEliminar}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#f44336',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginLeft: '10px',
                            }}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActividadesCalendario;
