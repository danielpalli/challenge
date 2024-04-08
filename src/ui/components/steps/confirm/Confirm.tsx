import { Service } from '../../../../interfaces/service.interface';

interface Props {
  selectedService: Service | null;
  selectedSlot: string | null;
}

export const Confirm = ({ selectedService, selectedSlot }: Props) => {
  return (
    <div>
      <p>Servicio: {selectedService?.name}</p>
      <p>Fecha y Horario: {selectedSlot}</p>
    </div>
  );
};
