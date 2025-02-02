import { toast } from "react-toastify";
import { PatientDetailItem } from "./";
import { usePatientStore } from "../store";
import { Patient } from "../interfaces/interfaces";

interface Props {
  patient: Patient;
}

export const PatientDetails = ({ patient }: Props) => {
  const { deletePatient, getPatientById } = usePatientStore();

  const handleClick = () => {
    deletePatient(patient.id);
    toast("Paciente Eliminado", {
      type: "error",
    });
  };

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha Alta" data={patient.date.toString()} />
      <PatientDetailItem label="Síntomas" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          type="button"
          onClick={() => getPatientById(patient.id)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>

        <button
          type="button"
          onClick={handleClick}
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
