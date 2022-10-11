import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizPage = () => {
  const data = useLoaderData();
  const [confirmed, setConfirmed] = useState(false);
  const [summary, setSummary] = useState({
    answered: 0,
    correct: 0,
  });
  console.log(data);

  return (
    <>
      <ToastContainer
        autoClose='1000'
        hideProgressBar={true}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        closeButton={false}
        position='bottom-right'
      />
      <section className='grid-cols-4 grid'>
        <div
          className={`${
            confirmed ? "col-span-full sm:col-span-3" : "col-span-full"
          } bg-gray-50`}
        >
          {!confirmed ? (
            <Confirmation {...data.data} setConfirmed={setConfirmed} />
          ) : (
            data.data.questions.map((el) => (
              <Questions setSummary={setSummary} key={el.id} {...el} />
            ))
          )}
        </div>
        <section className='col-span-full sm:col-span-1 text-center sm:text-left'>
          {confirmed && <Summary summary={summary} total={data.data.total} />}
        </section>
      </section>
    </>
  );
};

export default QuizPage;

const Confirmation = ({ logo, name, total, setConfirmed }) => {
  return (
    <>
      <div className='bg-gray-50 py-4  flex justify-between items-center px-4 md:px-16 lg:px-40'>
        <div className='flex'>
          <img className='w-52' src={logo} alt='' />
          <div className='text-2xl font-semibold px-4 py-2'>
            <p>{name}</p>
            <span className='text-base text-gray-600'>
              Total quizzes: {total}{" "}
            </span>
          </div>
        </div>
        <button
          onClick={() => setConfirmed(true)}
          className='py-1 px-5 bg-gray-500 hover:bg-gray-600  text-white font-semibold rounded-md shadow-md active:scale-[0.98] transition-all h-min'
        >
          Start Quiz
        </button>
      </div>
    </>
  );
};

const Questions = ({ question, options, correctAnswer, setSummary }) => {
  const [selected, setSelected] = useState();
  const [correct, setCorrect] = useState();
  const createMarkup = () => {
    return { __html: question };
  };
  const handleClick = (el) => {
    setSummary((p) => {
      return {
        ...p,
        answered: p.answered + 1,
        correct: el === correctAnswer ? p.correct + 1 : p.correct,
      };
    });
    setSelected(el);
    setCorrect(correctAnswer);
    if (el === correctAnswer) {
      toast("Correct", {
        icon: "🚀",
      });
    } else {
      toast("Incorrect", {
        icon: "⚠️",
        autoClose: 1000,
        hideProgressBar: true,
        style: { width: "max-content", textAlign: "center" },
        closeButton: false,
      });
    }
  };

  return (
    <div className='px-4 py-1 max-w-3xl mx-auto'>
      <p
        className='text-lg tracking-wide font-semibold pb-1'
        dangerouslySetInnerHTML={createMarkup()}
      />
      <div className='grid grid-cols-1 sm:grid-cols-2  text-base gap-x-5 gap-y-2'>
        {options.map((el) => (
          <i
            onClick={() => handleClick(el)}
            key={el}
            className={`${
              selected === el
                ? correct === el
                  ? "bg-green-400"
                  : "bg-orange-300"
                : "bg-gray-200"
            } p-2 rounded cursor-pointer ${selected && "pointer-events-none"}`}
          >
            {el}
          </i>
        ))}
      </div>
      <br />
    </div>
  );
};
const Summary = ({ summary, total }) => {
  return (
    <div className='sticky top-0 sm:h-screen text-xl p-6'>
      <p>Total question: {total}</p>
      <p>Total answered: {summary.answered}</p>
      <p>Correct answered: {summary.correct}</p>
      <p>Incorrect answered: {summary.answered - summary.correct}</p>
    </div>
  );
};
