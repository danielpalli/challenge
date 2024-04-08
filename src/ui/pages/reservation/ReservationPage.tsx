import { useEffect, useState } from 'react';
import { Categories, Confirm, ProgressBar, Slots } from '../../components';
import { Service } from '../../../interfaces/service.interface';
import { useNavigate } from 'react-router-dom';

export const ReservationPage = () => {
  const [step, setStep] = useState<number>(1);
  const [title, setTitle] = useState<string>('');
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const navigate = useNavigate();

  const handleSetSelectedService = (service: Service | null) => {
    setSelectedService(service);
  };

  const handleSetSelectedSlot = (slot: string | null) => {
    setSelectedSlot(slot);
  };

  const showStep = () => {
    switch (step) {
      case 1:
        return (
          <Categories
            setShowButtons={setShowButtons}
            setSelectedService={handleSetSelectedService}
            selectedService={selectedService}
          />
        );
      case 2:
        return (
          <Slots
            setShowButtons={setShowButtons}
            setSelectedService={setSelectedService}
            setSelectedSlot={handleSetSelectedSlot}
          />
        );
      case 3:
        return (
          <Confirm
            selectedService={selectedService}
            selectedSlot={selectedSlot}
          />
        );
      default:
        return (
          <Categories
            setShowButtons={setShowButtons}
            setSelectedService={handleSetSelectedService}
            selectedService={selectedService}
          />
        );
    }
  };

  const updateTitle = () => {
    switch (step) {
      case 1:
        setTitle('Seleccionar servicio');
        break;
      case 2:
        setTitle('Seleccionar horario');
        break;
      case 3:
        setTitle('Confirmar turno');
        break;
      default:
        setTitle('');
        break;
    }
  };

  useEffect(() => {
    updateTitle();
  }, [step]);

  useEffect(() => {
    if (step === 1) {
      setShowButtons(false);
    }
  }, [step]);

  useEffect(() => {
    let progressValue = 0;
    switch (step) {
      case 1:
        progressValue = 20;
        break;
      case 2:
        progressValue = 60;
        break;
      case 3:
        progressValue = 80;
        break;
      default:
        progressValue = 0;
        break;
    }
    setProgress(progressValue);
  }, [step]);

  const isNextButtonDisabled = () => {
    return !selectedService || !selectedSlot;
  };

  return (
    <>
      <div className="place-content-between flex flex-col h-full overflow-auto">
        <div className="p-4">
          <h3 className="text-sm font-bold text-gray-600">{title}</h3>
          <ProgressBar progress={progress} />

          <div className="border-gray-200 border mt-3 rounded-sm p-3 text-sm">
            {showStep()}
          </div>
        </div>

        {showButtons && (
          <div className="flex justify-between text-white border-b border-t py-2 px-8">
            {step !== 1 ? (
              <button
                className={`${
                  step === 3 ? 'button-disabled' : 'button-primary'
                } `}
                onClick={() => setStep(step - 1)}
              >
                Anterior
              </button>
            ) : (
              <button className="hide"></button>
            )}
            {step === 2 ? (
              <button
                className="button-primary"
                onClick={() => setStep(step + 1)}
                disabled={isNextButtonDisabled()}
              >
                Siguiente
              </button>
            ) : step === 3 ? (
              <button
                className="button-primary"
                onClick={() => {
                  navigate('/mis-turnos');
                }}
              >
                Confirmar
              </button>
            ) : (
              <button
                className="button-primary"
                onClick={() => setStep(step + 1)}
              >
                Siguiente
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};
