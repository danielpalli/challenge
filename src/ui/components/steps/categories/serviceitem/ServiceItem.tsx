import { Service } from '../../../../../interfaces/service.interface';

interface Props {
  service: Service;
  isSelected: boolean | null;
  handleServiceSelect: (service: Service) => void;
}

export const ServiceItem = ({
  service,
  isSelected,
  handleServiceSelect,
}: Props) => {
  return (
    <div className="border borger-gray-200 px-1 text-xs pb-2">
      <span>{service.name}</span>
      <p>{service.description}</p>
      <div className="flex justify-end py-1">
        <button
          className={`button-primary ${isSelected ? '' : 'button-disabled'}`}
          onClick={() => handleServiceSelect(service)}
        >
          {isSelected ? <span>Seleccionado</span> : <span>Seleccionar</span>}
        </button>
      </div>
    </div>
  );
};
