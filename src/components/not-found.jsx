import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div class='flex items-center justify-center min-h-screen bg-white py-48'>
        <div class='flex flex-col'>
          <div class='flex flex-col items-center'>
            <div class='text-gray-500 font-bold text-7xl'>404</div>

            <div class='font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10'>
              This page does not exist
            </div>

            <div class='text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8'>
              Go back to the{" "}
              <Link
                to={"/"}
                className='text-blue-500 hover:text-blue-700 underline'
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
