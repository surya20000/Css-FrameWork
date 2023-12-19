// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }

// import './App.css'

function App() {

  return (
    <>
      <nav className='flex items-center justify-between flex-wrap bg-#dc2626 p-6 bg-red-400'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <p className='font-bold text-xl'>Kalvium</p>
        </div>

        <div className='w-full block flex-grow sm:flex sm:items-center sm:w-auto'>
          <div className='text-sm sm:flex-grow space-evenly'>
            <a href="#" className="m-3 text-white text-l">About us</a>
            <a href="#" className=" text-white m-3 text-l">Contact</a>
            <a href="#" className="m-3 text-white text-l">Courses</a>
          </div>
          <div>
            <a href="#" className="border rounded border-white p-2 text-white">Log in</a>
          </div>
        </div>
      </nav>
      <div>
        <button className="border rounded bg-blue-600 text-xl text-white px-2 py-2 mx-20 my-5 mt-5">Button One</button>
      </div>
      <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-5 rounded my-5 flex gap-2 mx-20 ' role='alert'>
        <b className='font-bold'>Alert</b>
        <p>This is amesome</p>
      </div>

      <div className=" max-w-max mx-auto flex justify-center bg-white shadow-lg ml-auto mt-1 rounded-lg p-4">
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" className="h-20" />
        </div>
        <div className="mx-3">
          <strong> Kalvium Store </strong>
          <p> You have a new course! </p>
        </div>
      </div>

      <div className="bg-gray-300 mt-8 text-center text-l py-4">
        <p> ©️ 2021 Copyright: <a href="#"><b>  Kalvium </b> </a> </p>
      </div>
    </>
  )
}

export default App
