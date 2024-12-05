import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Historia() {
  return (
   
    <div> 
    <section className="d-flex align-items-center justify-content-between my-5 py-5 bg-light rounded-3 shadow-lg">
   
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
    
    <img
    src="/Logos/oscuros.jpg"
    alt="Descripción de la imagen"
    className="img-fluid me-5 rounded-circle border border-4 border-primary"
    style={{ maxWidth: '400px', height: 'auto' }}
  />
  </section>
  

    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img 
        src="/Logos/fanart.png" 
        className="d-block w-100" 
        alt="First slide" 
        style={{ maxHeight: '800px', objectFit: 'cover',objectPosition: 'center center' }} 
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Descripción de la primera imagen</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img 
        src="/Logos/oscuros2.jpg" 
        className="d-block w-100" 
        alt="Second slide" 
        style={{ maxHeight: '800px', objectFit: 'cover' }} 
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Descripción de la segunda imagen</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img 
        src="/Logos/oscuros3.jpg" 
        className="d-block w-100" 
        alt="Third slide" 
        style={{ maxHeight: '800px', objectFit: 'cover' }} 
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Descripción de la tercera imagen</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    {/* Área de Tarjetas */}
    <section className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src="/path/to/card-image1.jpg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Título de la Tarjeta 1</h5>
              <p className="card-text">Una breve descripción sobre lo que muestra esta tarjeta.</p>
              <Link href="/"> /*Agregar informacion del Bakend*/
                <a className="btn btn-primary">Ver más</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/path/to/card-image2.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Título de la Tarjeta 2</h5>
              <p className="card-text">Breve descripción de esta tarjeta.</p>
              <Link href="/"> /*Agregar informacion del Bakend*/
                <a className="btn btn-primary">Ver más</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/path/to/card-image3.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Título de la Tarjeta 3</h5>
              <p className="card-text">Breve descripción sobre la tarjeta.</p>
              <Link href="/"> /*Agregar informacion del Bakend*/
                <a className="btn btn-primary">Ver más</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/path/to/card-image4.jpg" className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <h5 className="card-title">Título de la Tarjeta 4</h5>
              <p className="card-text">Descripción breve de esta tarjeta.</p>
              <Link href="/"> /*Agregar informacion del Bakend*/
                <a className="btn btn-primary">Ver más</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/path/to/card-image5.jpg" className="card-img-top" alt="Card 5" />
            <div className="card-body">
              <h5 className="card-title">Título de la Tarjeta 5</h5>
              <p className="card-text">Descripción breve sobre esta tarjeta.</p>
              <Link href="/"> /*Agregar informacion del Bakend*/
                <a className="btn btn-primary">Ver más</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/path/to/card-image6.jpg" className="card-img-top" alt="Card 6" />
            <div className="card-body">
              <h5 className="card-title">Título de la Tarjeta 6</h5>
              <p className="card-text">Descripción breve sobre esta tarjeta.</p>
              <Link href="/"> /*Agregar informacion del Bakend*/
                <a className="btn btn-primary">Ver más</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
