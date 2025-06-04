import React from 'react';
import { BlogCard } from './BlogCard';

export const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c50e54638d98bbf193959d8f15adabcafe11a58e?placeholderIfAbsent=true',
      title: 'New Home Sales Picked\nUp in December',
      excerpt: 'A small river named Duden flows\nby their place and supplies it with\nthe necessary regelialia.',
      author: 'Admin',
      date: 'Dec. 01, 2020',
      comments: '3 Comments'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bda302677fe3d1e0b6a3d0aa22dcd0fe568c011e?placeholderIfAbsent=true',
      title: 'New Home Sales Picked\nUp in December',
      excerpt: 'A small river named Duden flows\nby their place and supplies it with\nthe necessary regelialia.',
      author: 'Admin',
      date: 'Dec. 01, 2020',
      comments: '3 Comments'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ec9a3bf77698abde1cad0ae1923e828aedd4f996?placeholderIfAbsent=true',
      title: 'New Home Sales Picked\nUp in December',
      excerpt: 'A small river named Duden flows\nby their place and supplies it with\nthe necessary regelialia.',
      author: 'Admin',
      date: 'Dec. 01, 2020',
      comments: '3 Comments'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d06bea8b46798453ede5860b6860d81d0d9cba40?placeholderIfAbsent=true',
      title: 'New Home Sales Picked\nUp in December',
      excerpt: 'A small river named Duden flows\nby their place and supplies it with\nthe necessary regelialia.',
      author: 'Admin',
      date: 'Dec. 01, 2020',
      comments: '3 Comments'
    }
  ];

  return (
    <section className="items-center z-0 flex w-full flex-col justify-center bg-[#F7F7F7] py-28 max-md:max-w-full max-md:py-[100px]">
      <div className="max-w-[1320px] flex w-[1320px] flex-col items-stretch pb-10 px-3">
        <header className="max-w-[1320px] items-center self-center z-10 flex h-[99px] w-[770px] flex-col font-bold text-center gap-[5.39px] px-3">
          <div className="text-[#5ea51d] text-[13px] font-bold leading-[23.4px]">
            Our Blog
          </div>
          <h2 className="text-black text-[50px] font-bold leading-[70px] max-md:text-[40px]">
            Recent Blog
          </h2>
        </header>
        <div className="mt-14 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {blogPosts.map((post, index) => (
              <div key={index} className="w-3/12 max-md:w-full max-md:ml-0">
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
