export default async function Home(){
  return (
    <>
      <div className="bg-red-400 h-full w-full flex justify-center items-center">
        <div className='relative bg-blue-400 h-180 w-180 flex justify-center items-center'>
          <div className='absolute h-100 w-60 bg-green-400 shadow-lg  rounded-md
          transform transition-transform duration-300
          hover:rotate-6'>

          </div>
          <div className='absolute h-60 w-40 bg-amber-300 shadow-lg rounded-md 
          transform transition-transform duration-300
          hover:rotate-90'>

          </div>
        </div>
      </div>
    </>
  );
}
