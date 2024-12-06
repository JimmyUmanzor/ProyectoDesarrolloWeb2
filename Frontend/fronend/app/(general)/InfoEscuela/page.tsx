import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Historia() {
  return (
    <div>
      {/* Sección principal */}
      <section className="container my-5 py-5 bg-white rounded-3 shadow-lg">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h4 className="display-4 text-primary mb-4 text-center">42 años y seguimos trabajando hoy mejor que ayer</h4>
            <p className="lead text-muted text-center">
              El Instituto Renacimiento fue fundado por la Licenciada Mirna Mejía Alvarenga, una gran educadora, cuya
              filosofía de la enseñanza es la de “educar con amor”.
            </p>
            <p className="text-dark text-center">
              Hoy Renacimiento, a 41 años de su creación, ha logrado posicionarse en un lugar muy privilegiado dentro de
              las instituciones educativas del país, integrando dos sistemas de enseñanza: la Enseñanza Bilingüe y la
              Enseñanza en Español.
            </p>
            <p className="text-dark text-center">
              Ubicado en la Colonia Mayangle de Comayagüela, Renacimiento cuenta con un excelente equipo de docentes,
              modernas instalaciones, 4 laboratorios de computación, una Biblioteca Virtual, Taller de Tecnología,
              Laboratorios de Ciencias Naturales y áreas de recreación para los niveles de Pre-Básica, Básica y Media con
              la modalidad de Bachillerato en Ciencias y Humanidades.
            </p>
            <p className="text-dark text-center">
              Renacimiento educa integralmente a sus estudiantes, desarrollando sus habilidades y destrezas. Promueve el
              deporte en disciplinas como Fútbol, Básquetbol, Béisbol y Voleibol, y fomenta las actividades artísticas de
              Danza Folklórica, Danza Moderna, Ballet, Banda Marcial y Violín. Además, fomenta el amor a Dios y los valores
              humanos en sus estudiantes.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKsE8eOvtfoW7xFVTSSGb8xi0N3bdK-oupw&s"
              alt="Logotipo oscuro"
              className="img-fluid rounded-circle border border-4 border-primary"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Área de Tarjetas */}
      <section className="container my-5">
        <h2 className="text-center mb-4 text-primary">Contacto y Redes Sociales</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Tarjeta de Facebook */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" // Imagen de Facebook
                className="card-img-top"
                alt="Facebook"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Síguenos en Facebook</h5>
                <p className="card-text">Encuentra nuestras publicaciones, eventos y noticias importantes en nuestra página de Facebook.</p>
                <Link href="https://www.facebook.com/InstitutoRenacimiento" target="_blank" className="btn btn-primary mt-auto">
                  Visitar
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjeta de Instagram */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png" // Imagen de Instagram
                className="card-img-top"
                alt="Instagram"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Síguenos en Instagram</h5>
                <p className="card-text">Descubre nuestras fotos y videos más destacados. Síguenos y forma parte de nuestra comunidad.</p>
                <Link href="https://www.instagram.com/InstitutoRenacimiento" target="_blank" className="btn btn-primary mt-auto">
                  Visitar
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjeta de WhatsApp */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://i.pinimg.com/736x/6c/af/bf/6cafbfe7ddf61f521a13dbb6498ce306.jpg" // Imagen de WhatsApp
                className="card-img-top"
                alt="WhatsApp"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Contáctanos por WhatsApp</h5>
                <p className="card-text">Comunícate con nosotros directamente y recibe respuestas rápidas a tus preguntas.</p>
                <Link href="https://wa.me/123456789" target="_blank" className="btn btn-primary mt-auto">
                  Iniciar Chat
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjeta de Correo Electrónico */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://1000marcas.net/wp-content/uploads/2019/11/logo-Gmail-1.png" // Imagen de correo electrónico
                className="card-img-top"
                alt="Correo Electrónico"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Correo Electrónico</h5>
                <p className="card-text">Envíanos un correo electrónico para obtener información adicional o para consultas generales.</p>
                <Link href="mailto:info@institutorenacimiento.com" className="btn btn-primary mt-auto">
                  Enviar Correo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
