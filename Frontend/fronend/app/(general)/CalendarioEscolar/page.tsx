'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

// Define la estructura de las actividades
interface Actividad {
    idActividad: number;
    idUsuario: number;
    idAlumno: number;
    fechaActividad: string; // Formato de fecha ISO
    descripcion: string;
    tipoActividad: string;
}

const localizer = momentLocalizer(moment);

const ActividadesCalendario: React.FC = () => {
    const [actividades, setActividades] = useState<Actividad[]>([]); // Estado para las actividades

    useEffect(() => {
        const fetchActividades = async () => {
            try {
                const response = await fetch('http://localhost:5000/actividades'); // Reemplaza con tu endpoint
                if (!response.ok) {
                    throw new Error('Error al obtener actividades');
                }
                const data: Actividad[] = await response.json();
                setActividades(data);
            } catch (error) {
                console.error('Error al obtener actividades:', error);
            }
        };
        fetchActividades();
    }, []);

    // Convierte las actividades a eventos para el calendario
    const eventos = actividades.map((actividad) => ({
        title: actividad.descripcion,
        start: new Date(actividad.fechaActividad),
        end: new Date(new Date(actividad.fechaActividad).getTime() + 60 * 60 * 1000), // Supone 1 hora de duración
    }));

    return (
        <div style={{ padding: '20px' }}>
            <h1>Calendario de Actividades</h1>
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
