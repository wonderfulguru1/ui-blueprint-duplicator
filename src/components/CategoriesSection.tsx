import React from 'react';

interface CategoryCardProps {
  icon: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title }) => (
  <div className="bg-[rgba(243,245,241,1)] flex grow flex-col items-center text-2xl text-black font-semibold whitespace-nowrap text-center w-full px-[53px] py-[58px] max-md:mt-1 max-md:px-5">
    <img
      src={icon}
      className="aspect-[1] object-contain w-[70px]"
      alt={`${title} icon`}
    />
    <div className="text-2xl font-semibold leading-[36px]">
      {title}
    </div>
  </div>
);

export const CategoriesSection: React.FC = () => {
  const categories = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cde17bdea1859b0ee3d4757e069314cc3fd2a7f8?placeholderIfAbsent=true', title: 'Land' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c62228b0e06d48c24c534e91ca4195662049ddd1?placeholderIfAbsent=true', title: 'Residential' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/596fd5148c4462acd43d2474964c70b01d8c49e0?placeholderIfAbsent=true', title: 'Commercial' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a157c4c0c15bdee18ae0ca7a09fc3ef1ae6a2b1c?placeholderIfAbsent=true', title: 'Industrial' }
  ];

  return (
    <section className="max-w-[1320px] self-center z-0 flex w-[1320px] flex-col items-center pb-[237px] px-20 max-md:pb-[100px] max-md:px-5">
      <div className="z-10 flex mb-[-47px] w-[1076px] max-w-full flex-col items-stretch max-md:mb-2.5">
        <header className="max-w-[1320px] items-center self-center flex h-[99px] w-[880px] flex-col font-bold text-center gap-[5.39px] px-3">
          <div className="text-[#5ea51d] text-[13px] font-bold leading-[23.4px]">
            Oakberry Categories
          </div>
          <h2 className="text-black text-[50px] font-bold leading-[70px] max-md:max-w-full max-md:text-[40px]">
            Explore Our Categories & Places
          </h2>
        </header>
        <div className="mt-[72px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {categories.map((category, index) => (
              <div key={index} className="w-3/12 max-md:w-full max-md:ml-0">
                <CategoryCard icon={category.icon} title={category.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
