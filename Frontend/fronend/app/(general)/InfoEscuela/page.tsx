'use client';

import React, { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Historia.css'
import { title } from "process";
import { ClientReferenceManifestPlugin } from "next/dist/build/webpack/plugins/flight-manifest-plugin";

export default function Historia() {
  // // const [montar, setMostrar] = useState(false);

  // const Changetexto = () => {
  //   setMostrar(!montar);
  // };

  const tarjetas = () => {
    const data = [
      {
        imagen: '/Logos/oscuros.jpg',
        Titulo: 'Clausuras Primer Grado',
        Descripcion: 'Estamos muy orgulloso de estar clasusurando este 2024 con el reconocimiento de nuestros alunmos renacentistas'      
      },
      {
        imagen: '/Logos/oscuro2.jpg',
        Titulo: 'Clausuras Segundo Grado',
        Descripcion: 'Estamos muy orgulloso de estar clasusurando este 2024 con el reconocimiento de nuestros alunmos renacentistas '
      },
      {
        imagen: '/Logos/oscuro3.jpg',
        Titulo: 'Clausuras Tercer Grado',
        Descripcion: 'Estamos muy orgulloso de estar clasusurando este 2024 con el reconocimiento de nuestros alunmos renacentistas '
      },
      {
        imagen: '/Logos/oscuro4.jpg',
        Titulo: 'Clausuras Cuarto Grado',
        Descripcion: 'Estamos muy orgulloso de estar clasusurando este 2024 con el reconocimiento de nuestros alunmos renacentistas '
      },
      {
        imagen: '/Logos/oscuro5.jpg',
        Titulo: 'Clausuras Quinto Grado',
        Descripcion: 'Estamos muy orgulloso de estar clasusurando este 2024 con el reconocimiento de nuestros alunmos renacentistas '
      },
      {
        imagen: '/Logos/oscuro6.jpg',
        Titulo: 'Clausuras Sexto Grado',
        Descripcion: 'Estamos muy orgulloso de estar clasusurando este 2024 con el reconocimiento de nuestros alunmos renacentistas '
      }
    ];

    return (
      
      <section className="container my-5">
      <h1 className="centrar">Actividades</h1>
      
        <div className="row row-cols-1 row-cols-md-3 g-4 w">
        
          {data.map((item, index) => (
            <div key={index} className="col">
            
              <div className="card">
              
                <img
                  src={item.imagen}
                  className="card-img-top Card_Personalizadas"
                  alt={item.Titulo}
                />
                <div className="card-body Card_TextoP">
                  <h5 className="card-title Titulos">{item.Titulo}</h5>
                  <p className="card-text">{item.Descripcion}</p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div>
      <section className="d-flex align-items-center justify-content-between my-5 py-5 bg-light rounded-3 shadow-lg">
        <img
          src="/Logos/insta.png"
          alt="Descripción de la imagen"
          className="img-fluid me-5 "
         // style={{ maxWidth: '500px', height: 'auto' }}
        />
        <div className="w-75">
          <h2 className="display-4 text-primary mb-3">42 años y seguimos trabajando hoy mejor que ayer.</h2>
          <p className="lead text-muted">
            El Instituto Renacimiento, fue fundado por la Licenciada Mirna Mejía Alvarenga, una gran educadora, cuya filosofía de la enseñanza es la de “educar con amor”.
          </p>
          <p className="text-dark">
            Hoy Renacimiento, a 41 años de su creación, ha logrado posicionarse en un lugar muy privilegiado dentro de las instituciones educativas del país, que integra dos Sistemas de Enseñanza: La Enseñanza Bilingüe y la Enseñanza en Español.
          </p>
          <p className="text-dark">
            Ubicado en la Colonia Mayangle de Comayagüela, Renacimiento cuenta con un excelente staff de docentes, modernas instalaciones físicas para la eficiente labor educativa, tiene 4 laboratorios de computación, una Biblioteca Virtual, Taller de Tecnología, Laboratorios de Ciencias Naturales, áreas de recreación para los niveles de Pre-Básica, Básica y Media con la modalidad de Bachillerato en Ciencias y Humanidades.
          </p>
          <p className="text-dark">
            Renacimiento educa integralmente a sus estudiantes, desarrollando sus habilidades y destrezas. Promueve el deporte en las disciplinas de Fútbol, Básquetbol, Béisbol y Voleibol, trabaja las actividades artísticas de Danza Folklórica, Danza Étnica, Danza Moderna, Ballet, Banda Marcial y Violín, y fomenta el amor a Dios y los valores humanos en sus estudiantes.
          </p>
        </div>
      </section>




      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/Logos/carrucel1.png"
              className="d-block w-100"
              alt="Primera diapositiva"
              style={{ maxHeight: "200vh", objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/Logos/carrucel2.jpg"
              className="d-block w-100"
              alt="Segunda diapositiva"
              style={{ maxHeight: "200vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/Logos/Prek.jpg"
              className="d-block w-100"
              alt="Tercera diapositiva"
              style={{ maxHeight: "200vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      

      {tarjetas()}
    </div>
  );
}
