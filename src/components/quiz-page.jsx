import { useLoaderData } from "react-router-dom";

const QuizPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Confirmation {...data.data} />
    </>
  );
};

export default QuizPage;

const Confirmation = ({ logo, name, total }) => {
  return (
    <>
      <div className='bg-gray-50 py-4 flex justify-between items-center p-4'>
        <div className='flex'>
          <img className='w-52' src={logo} alt='' />
          <div className='text-2xl font-semibold px-4 py-2'>
            <p>{name}</p>
            <span className='text-base text-gray-600'>
              Total quizzes: {total}{" "}
            </span>
          </div>
        </div>
        <button className='py-1 px-5 bg-gray-500 hover:bg-gray-600  text-white font-semibold rounded-md shadow-md active:scale-[0.98] transition-all h-min'>
          Start Quiz
        </button>
      </div>
    </>
  );
};
