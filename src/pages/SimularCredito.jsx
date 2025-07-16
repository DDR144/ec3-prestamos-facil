import CreditSimulatorForm from "../components/CreditSimulatorForm";

function SimularCredito() {
  return (
    <>
      <h1>Simular Crédito</h1>
      <p>
        Aquí podrás calcular tu préstamo ideal ingresando el monto, plazo e
        interés anual.
      </p>
      <CreditSimulatorForm />
    </>
  );
}

export default SimularCredito;
