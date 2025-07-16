function Contacto() {
  return (
    <>
      <h1>Contacto</h1>
      <p>
        ¿Tienes alguna consulta? Escríbenos y te responderemos lo antes posible.
      </p>

      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="tu@email.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control no-resize"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
}

export default Contacto;
