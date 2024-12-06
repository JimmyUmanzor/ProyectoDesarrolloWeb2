'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

interface Actividad {
    idActividad?: number;
    idUsuario: number;
    idAlumno: number;
    fechaActividad: string; 
    descripcion: string;
    tipoActividad: string;
}

const localizer = momentLocalizer(moment);

const ActividadesCalendario: React.FC = () => {
    const [actividades, setActividades] = useState<Actividad[]>([]);

    useEffect(() => {
        const fetchActividades = async () => {
            try {
                const response = await fetch('/api/actividades');
                const data: Actividad[] = await response.json();
                setActividades(data);
            } catch (error) {
                console.error('Error al obtener actividades:', error);
            }
        };
        fetchActividades();
    }, []);

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
