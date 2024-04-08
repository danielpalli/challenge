import { useState } from 'react';
import { serviceData } from '../../../../data/service.data';
import { ServiceItem } from '../..';
import { Service } from '../../../../interfaces/service.interface';

interface Props {
  setShowButtons: (showButtons: boolean) => void;
  setSelectedService: (service: Service | null) => void;
  selectedService: Service | null;
}

export const Categories = ({
  setShowButtons,
  setSelectedService,
  selectedService,
}: Props) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories: string[] = Array.from(
    new Set(serviceData.services.map((service) => service.category))
  );

  const handleCategoryClick = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setShowButtons(true);
  };

  return (
    <>
      <p>Categorías</p>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <div>
              <div
                className="flex justify-between w-full items-center bg-gray-100 px-1 cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <span>{category}</span>
                <i
                  className={`fa-solid fa-${
                    expandedCategory === category ? 'minus' : 'plus'
                  }`}
                ></i>
              </div>
              {expandedCategory === category && (
                <ul className="space-y-3 mt-2">
                  {serviceData.services
                    .filter((service) => service.category === category)
                    .map((service: Service) => (
                      <li key={service.id}>
                        <ServiceItem
                          service={service}
                          isSelected={
                            selectedService && selectedService.id === service.id
                          }
                          handleServiceSelect={handleServiceSelect}
                        />
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
