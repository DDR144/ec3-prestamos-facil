function Prestamos() {
  return (
    <>
      <h1>Préstamos</h1>
      <p>
        Conoce los diferentes tipos de préstamos que ofrecemos para ayudarte a
        alcanzar tus metas.
      </p>

      <ul className="list-group list-group-flush mt-3">
        <li className="list-group-item">
          <i class="bi bi-check"></i> Préstamos personales
        </li>
        <li className="list-group-item">
          <i class="bi bi-check"></i> Préstamos para estudios
        </li>
        <li className="list-group-item">
          <i class="bi bi-check"></i> Préstamos para emprendimientos
        </li>
        <li className="list-group-item">
          <i class="bi bi-check"></i> Préstamos rápidos (hasta S/ 5,000)
        </li>
      </ul>
      <p className="mt-4">
        Consulta con nosotros para encontrar la mejor opción para ti.
      </p>
    </>
  );
}

export default Prestamos;
