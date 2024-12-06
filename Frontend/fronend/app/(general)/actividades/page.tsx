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
    const [nuevaActividad, setNuevaActividad] = useState<Actividad>({
        idUsuario: 1, 
        idAlumno: 1, 
        fechaActividad: '', 
        descripcion: '',
        tipoActividad: 'General',
    });

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

    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNuevaActividad({ ...nuevaActividad, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/actividades', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevaActividad),
            });
            const actividadCreada: Actividad = await response.json();
            setActividades([...actividades, actividadCreada]); 
            setNuevaActividad({
                idUsuario: 1,
                idAlumno: 1,
                fechaActividad: '',
                descripcion: '',
                tipoActividad: 'General',
            }); 
        } catch (error) {
            console.error('Error al crear actividad:', error);
        }
    };

    const eventos = actividades.map((actividad) => ({
        title: actividad.descripcion,
        start: new Date(actividad.fechaActividad),
        end: new Date(new Date(actividad.fechaActividad).getTime() + 60 * 60 * 1000), 
    }));

    return (
        <div style={{ padding: '20px' }}>
            <h1>Calendario de Actividades</h1>

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
                        type="date"
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
                        <option value="General">General</option>
                        <option value="Examen">Examen</option>
                        <option value="Tarea">Tarea</option>
                    </select>
                </div>
                <button type="submit" style={{ marginTop: '10px', padding: '5px 10px' }}>
                    Agregar Actividad
                </button>
            </form>

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
