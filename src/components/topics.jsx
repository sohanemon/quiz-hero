import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading from "./heading";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setTopics(data.data));
    return () => {};
  }, []);

  return (
    <div className=' snap-center h-screen px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:w-3/4 '>
      <Heading
        coloredText={"Choose"}
        normalText={"your topic"}
        subText={"Click on topic"}
      />
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
      to={`/quiz/${id}`}
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
