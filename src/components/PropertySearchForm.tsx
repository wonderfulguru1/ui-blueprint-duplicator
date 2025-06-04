import React, { useState } from 'react';

export const PropertySearchForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');
  const [formData, setFormData] = useState({
    keyword: '',
    location: '',
    propertyType: 'Residential',
    priceRange: '$100'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    console.log('Search submitted:', { ...formData, type: activeTab });
  };

  return (
    <section className="self-center z-0 flex min-w-[420px] h-[152px] w-[1303px] max-w-full flex-col items-stretch px-3">
      <div className="justify-center self-center flex h-[51px] gap-[4.88px] text-base font-bold text-center leading-[29px]">
        <button
          onClick={() => setActiveTab('buy')}
          className={`text-base font-bold leading-[28.8px] max-md:px-5 ${
            activeTab === 'buy' ? 'text-black' : 'text-gray-500'
          }`}
        >
          Buy Properties
        </button>
        <button
          onClick={() => setActiveTab('rent')}
          className={`text-base font-bold leading-[28.8px] max-md:px-5 ${
            activeTab === 'rent' ? 'text-black' : 'text-gray-500'
          }`}
        >
          Rent Properties
        </button>
      </div>
      <div className="shadow-[0px_10px_33px_-27px_rgba(0,0,0,0.40)] w-full overflow-hidden bg-white max-md:max-w-full">
        <form className="flex w-full flex-col max-md:max-w-full">
          <div className="text-black text-sm font-bold leading-[25px] border-l-[rgba(0,0,0,0.10)] z-[10] mr-[-155px] min-h-[117px] gap-[1.3px] pl-[25px] pr-[24px] pt-[26px] pb-[49px] border-l-[1px] border-solid max-md:max-w-full max-md:px-5">
            Location
          </div>
          <div className="border-l-[rgba(0,0,0,0.10)] mt-[-101px] w-[1177px] max-w-[100%] font-[400] pb-[25px] border-l-[1px] border-solid">
            <div className="self-stretch z-10 flex w-full flex-col font-bold pl-6 py-8 max-md:max-w-full max-md:pl-5">
              <label className="text-black text-sm font-bold leading-[25.2px]">
                Enter Keyword
              </label>
              <div className="border-l-[rgba(0,0,0,0.10)] z-[10] mt-[-44px] mr-[-101px] text-[16px] px-[24px] border-l-[1px] border-solid max-md:max-w-full max-md:px-5">
                <input
                  type="text"
                  value={formData.keyword}
                  onChange={(e) => handleInputChange('keyword', e.target.value)}
                  placeholder="Search Location"
                  className="text-base font-normal leading-[24px] max-md:max-w-full max-md:mt-10 w-full border-none outline-none"
                />
                <div className="text-base font-normal leading-[24px] max-md:max-w-full">
                  {formData.priceRange}
                </div>
                <button
                  type="button"
                  onClick={handleSearch}
                  className="text-base font-bold leading-[24px] max-md:max-w-full bg-transparent border-none cursor-pointer"
                >
                  Search
                </button>
                <label className="text-black text-sm font-bold leading-[25.2px]">
                  Property Type
                </label>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ad9c13af9fe7bfa1fe488e9f3bd818c2600c203?placeholderIfAbsent=true"
                className="aspect-[0.94] object-contain w-[15px] mt-[-45px]"
                alt="Search icon"
              />
            </div>
            <select
              value={formData.propertyType}
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
              className="text-base font-normal leading-[24px] max-md:max-w-full border-none outline-none"
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Land">Land</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};
