import React from 'react';

interface LocationItemProps {
  city: string;
  properties: string;
}

const LocationItem: React.FC<LocationItemProps> = ({ city, properties }) => (
  <div className="items-center border-b-[rgba(0,0,0,0.05)] w-[100%] pb-4 border-b-[1px] border-solid">
    <div className="items-stretch flex w-[127px] max-w-full flex-col gap-[0.3px]">
      <div className="text-black text-base font-bold leading-[28.8px]">
        {city}
      </div>
      <div className="text-base font-normal leading-[28.8px]">
        {properties}
      </div>
    </div>
  </div>
);

export const LocationsSection: React.FC = () => {
  const locationColumns = [
    [
      { city: 'New York', properties: '200 Properties' },
      { city: 'London', properties: '100 Properties' },
      { city: 'Chicago', properties: '120 Properties' },
      { city: 'Illinois', properties: '300 Properties' }
    ],
    [
      { city: 'California', properties: '100 Properties' },
      { city: 'Tennessee', properties: '200 Properties' },
      { city: 'Texas', properties: '200 Properties' },
      { city: 'North Carolina', properties: '200 Properties' }
    ],
    [
      { city: 'Florida', properties: '422 Properties' },
      { city: 'Charlotte', properties: '200 Properties' },
      { city: 'Orlando', properties: '200 Properties' },
      { city: 'Atlanta', properties: '200 Properties' }
    ]
  ];

  return (
    <div className="mt-[54px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {locationColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="text-base text-center leading-[29px] gap-[15px] max-md:mt-6">
              {column.map((location, index) => (
                <div key={index} className={index > 0 ? 'mt-[15px]' : ''}>
                  <LocationItem city={location.city} properties={location.properties} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
