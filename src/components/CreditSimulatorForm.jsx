function CreditSimulatorForm() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="card shadow-lg p-4">
          <h2 className="text-center mb-4">Simulador de Crédito</h2>
          <form>
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Monto del crédito (S/)</label>
                <input type="number" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Plazo (meses)</label>
                <input type="number" className="form-control" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Interés anual (%)</label>
                <input type="number" step="0.01" className="form-control" />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="reset" className="btn btn-primary px-5">
                Calcular
              </button>
            </div>
          </form>

          <hr className="my-4" />

          <div className="alert alert-info text-center">
            <h5 className="mb-3">Resultado de la simulación</h5>
            <p>
              <strong>Cuota mensual:</strong> S/ 00.00
            </p>
            <p>
              <strong>Total a pagar:</strong> S/ 00.00
            </p>
            <p>
              <strong>Intereses totales:</strong> S/ 00.00
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreditSimulatorForm;
