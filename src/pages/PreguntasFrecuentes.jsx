function PreguntasFrecuentes() {
  return (
    <>
      <h1>Preguntas Frecuentes</h1>
      <p>
        Encuentra respuestas a las dudas más comunes sobre nuestros servicios.
      </p>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="q1">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#a1"
            >
              ¿Cuál es el monto máximo que puedo solicitar?
            </button>
          </h2>
          <div
            id="a1"
            className="accordion-collapse collapse show"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <i class="bi bi-arrow-return-right pe-2"></i>
              Puedes solicitar hasta S/ 50,000 dependiendo de tu evaluación
              crediticia.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="q2">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#a2"
            >
              ¿Cuánto tiempo tarda la aprobación?
            </button>
          </h2>
          <div
            id="a2"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <i class="bi bi-arrow-return-right pe-2"></i>
              El tiempo de aprobación puede variar entre 24 a 72 horas.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="q3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#a3"
            >
              ¿Necesito tener historial crediticio?
            </button>
          </h2>
          <div
            id="a3"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <i class="bi bi-arrow-return-right pe-2"></i>
              No es obligatorio, pero mejora tus posibilidades de acceder a
              montos mayores.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreguntasFrecuentes;
