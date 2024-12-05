'use client';

export default function Portada() {
  return (
    <div className="container text-center mt-5">
      <div className="p-5 bg-light rounded shadow">
        <h1 className="display-4">Bienvenido</h1>
        <p className="lead">
          <strong>Jonathan Jesús Lorenzana Lemus</strong>
        </p>
        <hr className="my-4" />
        <p className="fs-5">
          <strong>Tarea:</strong> Cargar datos del backend en gráficas
        </p>
        <p className="fs-5">
          <strong>Número de cuenta:</strong> T32351113
        </p>
        <p className="fs-5">
          <strong>Clase:</strong> Desarrollo Web 2
        </p>
        <div className="d-flex justify-content-center mt-4">
          <a href="/graficas" className="btn btn-primary btn-lg mx-2">
            Ver valor maximo
          </a>
          <a href="/valor-minimo" className="btn btn-secondary btn-lg mx-2">
            Valor Mínimo
          </a>
          <a href="/2" className="btn btn-info btn-lg mx-2">
            valor maximo por producto
          </a>
        </div>
      </div>
    </div>
  );
}
