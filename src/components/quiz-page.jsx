import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const QuizPage = () => {
  const data = useLoaderData();
  const [confirmed, setConfirmed] = useState(false);
  const [summary, setSummary] = useState({
    answered: 0,
    correct: 0,
  });

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
        position='top-center'
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
        icon: "????",
      });
    } else {
      toast("Incorrect", {
        icon: "??????",
        autoClose: 1000,
        hideProgressBar: true,
        style: { width: "max-content", textAlign: "center" },
        closeButton: false,
      });
    }
  };
  const showCorrectAnswer = () => {
    toast(correctAnswer, {
      icon: "???",
      autoClose: 2000,
      hideProgressBar: true,
      style: { width: "max-content", textAlign: "center" },
      closeButton: false,
    });
  };

  return (
    <div className='px-4 py-1 max-w-3xl mx-auto'>
      <div className='flex items-center justify-between'>
        <p
          className='text-lg tracking-wide font-semibold pb-1'
          dangerouslySetInnerHTML={createMarkup()}
        />
        <svg
          className='cursor-pointer w-6 h-6'
          // eye
          onClick={showCorrectAnswer}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
          />
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      </div>

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
  const mySwal = withReactContent(Swal);
  const mark = ((summary.correct / total) * 100).toFixed(0);
  if (summary.answered === total) {
    mySwal.fire(
      mark > 32 ? (mark > 79 ? "A+" : "Pass") : "Fail",
      `You got ${mark}% mark.`,
      mark > 79 ? "success" : mark > 32 ? "question" : "error"
    );
  }
  return (
    <div className='sticky top-0 sm:h-screen text-xl p-6'>
      <p>Total question: {total}</p>
      <p>Total answered: {summary.answered}</p>
      <p>Correct answered: {summary.correct}</p>
      <p>Incorrect answered: {summary.answered - summary.correct}</p>
    </div>
  );
};
