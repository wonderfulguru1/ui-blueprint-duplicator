import React from 'react';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  comments: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  excerpt,
  author,
  date,
  comments
}) => {
  return (
    <article className="rounded shadow-[0px_10px_25px_-13px_rgba(0,0,0,0.10)] flex w-full flex-col overflow-hidden items-center text-[#999999] bg-white mx-auto pb-[52px] max-md:mt-6">
      <img
        src={image}
        className="aspect-[1.02] object-contain w-full self-stretch"
        alt={title}
      />
      <div className="flex w-[239px] max-w-full items-center gap-[13px] text-[13px] font-semibold uppercase leading-[1.8] mt-[29px]">
        <div className="text-[13px] font-semibold leading-[23.4px]">
          {author}
        </div>
        <div className="text-[13px] font-semibold leading-[23.4px]">
          {date}
        </div>
        <div className="text-[13px] font-semibold leading-[23px] self-stretch text-[#5ea51d]">
          {comments}
        </div>
      </div>
      <h3 className="text-black text-xl font-bold leading-[30px] mt-4 text-center">
        {title}
      </h3>
      <p className="text-base font-normal leading-[28.8px] text-center">
        {excerpt}
      </p>
    </article>
  );
};
