import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setTopics(data.data));
    return () => {};
  }, []);

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:w-3/4 '>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 '>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='7b568941-9ed0-4f49-85a0-5e21ca6c7ad6'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>Choose</span>
          </span>{" "}
          your topic
          <p className='text-sm text-gray-500 py-4 tracking-widest'>
            Tap to start quiz
          </p>
        </h2>
      </div>
      <div className='grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
        {topics?.map((el) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

function Card({ id, name, logo, total }) {
  return (
    <Link
      to={`quiz/${id}`}
      aria-label='View Item'
      className='inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2'
    >
      <div className='flex flex-col h-full'>
        <img
          src={logo}
          className='object-cover lg:object-fill w-full h-48 bg-gray-400 '
          alt=''
        />
        <div className='flex-grow border border-t-0 rounded-b'>
          <div className='p-5'>
            <h6 className='mb-2 font-semibold leading-5'>{name}</h6>
            <p className='text-sm text-gray-900'>
              Total quizzes:{" "}
              <span className='font-semibold tracking-widest'>{total}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
