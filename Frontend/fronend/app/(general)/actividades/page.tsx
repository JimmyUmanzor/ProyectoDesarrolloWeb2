'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

interface Actividad {
    id?: number;
    idUsuario: string;
    idAlumno: string;
    fechaActividad: string;
    descripcion: string;
    tipoActividad: string;
}

const localizer = momentLocalizer(moment);

const ActividadesCalendario: React.FC = () => {
    const [actividades, setActividades] = useState<Actividad[]>([]);
    const [nuevaActividad, setNuevaActividad] = useState<Actividad>({
        idUsuario: 'U003',
        idAlumno: 'A001',
        fechaActividad: '',
        descripcion: '',
        tipoActividad: 'Tareas',  // valor por defecto
    });

    // Obtener actividades desde la API
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

    // Manejar cambios en el formulario
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNuevaActividad({ ...nuevaActividad, [name]: value });
    };

    // Enviar una nueva actividad a la API
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/actividades', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevaActividad),
            });

            if (response.ok) {
                const actividadCreada: Actividad = await response.json();
                setActividades([...actividades, actividadCreada]);
                setNuevaActividad({
                    idUsuario: 'U003',
                    idAlumno: 'A001',
                    fechaActividad: '',
                    descripcion: '',
                    tipoActividad: 'Tareas',
                });
            } else {
                console.error('Error al crear actividad:', await response.text());
            }
        } catch (error) {
            console.error('Error al crear actividad:', error);
        }
    };

    // Transformar las actividades en eventos para el calendario
    const eventos = actividades.map((actividad) => ({
        title: actividad.descripcion,
        start: new Date(actividad.fechaActividad),
        end: new Date(new Date(actividad.fechaActividad).getTime() + 60 * 60 * 1000), // Una hora de duración
    }));

    return (
        <div style={{ padding: '20px' }}>
            <h1>Calendario de Actividades</h1>

            {/* Formulario para agregar nuevas actividades */}
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <div>
                    <label>Descripción:</label>
                    <input
                        type="text"
                        name="descripcion"
                        value={nuevaActividad.descripcion}
                        onChange={handleInputChange}
                        required
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>Fecha:</label>
                    <input
                        type="datetime-local"
                        name="fechaActividad"
                        value={nuevaActividad.fechaActividad}
                        onChange={handleInputChange}
                        required
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>Tipo de Actividad:</label>
                    <select
                        name="tipoActividad"
                        value={nuevaActividad.tipoActividad}
                        onChange={handleInputChange}
                        style={{ marginLeft: '10px', padding: '5px' }}
                    >
                        <option value="Tareas">Tareas</option>
                        <option value="Deméritos">Deméritos</option>
                        <option value="Anuncios">Anuncios</option>
                        <option value="Actividad de Campo">Actividad de Campo</option>
                        <option value="Examen">Examen</option>
                        <option value="Reposiciones">Reposiciones</option>
                        <option value="Méritos">Méritos</option>
                    </select>
                </div>
                <button type="submit" style={{ marginTop: '10px', padding: '5px 10px' }}>
                    Agregar Actividad
                </button>
            </form>

            {/* Componente del calendario */}
            <Calendar
                localizer={localizer}
                events={eventos}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={{
                    next: 'Siguiente',
                    previous: 'Anterior',
                    today: 'Hoy',
                    month: 'Mes',
                    week: 'Semana',
                    day: 'Día',
                    agenda: 'Agenda',
                }}
            />
        </div>
    );
};

export default ActividadesCalendario;

