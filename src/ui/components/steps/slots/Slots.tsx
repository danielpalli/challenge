import { getDataSlots } from '../../../../utils/slots.util';
import { Service } from '../../../../interfaces/service.interface';
import { useState } from 'react';

interface Props {
  setShowButtons: (showButtons: boolean) => void;
  setSelectedService: (service: Service | null) => void;
  setSelectedSlot: (slot: string | null) => void;
}

export const Slots = ({ setShowButtons, setSelectedSlot }: Props) => {
  const availableSlots = getDataSlots();

  const [selectedSlots, setSelectedSlots] = useState<{
    [date: string]: string | null;
  }>({});

  const handleSlotSelect = (slot: string, date: string) => {
    const newSelectedSlots = { ...selectedSlots };

    if (newSelectedSlots[date] === slot) {
      newSelectedSlots[date] = null;
    } else {
      Object.keys(newSelectedSlots).forEach((key) => {
        if (key !== date && newSelectedSlots[key] !== null) {
          newSelectedSlots[key] = null;
        }
      });

      newSelectedSlots[date] = slot;
    }

    setShowButtons(true);
    setSelectedSlot(slot);
    setSelectedSlots(newSelectedSlots);
  };

  return (
    <>
      <div className="flex flex-col">
        <p>Próximos turnos disponibles</p>
        {availableSlots.map((slot, index) => (
          <div key={index}>
            <p className="font-bold py-3">
              {new Date(slot.date).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'long',
              })}
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {slot.availableTimeslots.map((timeSlot, index) => (
                <button
                  key={index}
                  className={`button ${
                    timeSlot === selectedSlots[slot.date]
                      ? 'button-primary'
                      : 'button-secondary'
                  }`}
                  onClick={() => handleSlotSelect(timeSlot, slot.date)}
                >
                  {timeSlot}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
