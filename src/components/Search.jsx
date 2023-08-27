import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className='bg-secondary md:px-52 px-6 py-10 flex flex-col w-full'>
        <h2 className='text-white font-poppins font-bold text-xl'>The Ethereum Blockchain Explorer</h2>
        <div className='mt-4 flex flex-row sm:w-2/3 w-full border border-[#273343] p-2 rounded-md bg-primary justify-between text-center'>
            <input type="text" id="first_name" className="bg-primary rounded-md py-1 px-4 w-11/12 mx-2 focus:outline-none text-white focus:border focus:border-[#273343]" placeholder="Search by Address" autoComplete="off"/>
            <BiSearch className=" bg-button hover:bg-[#0651a6] rounded-md w-[35px] h-[35px] p-2 cursor-pointer text-white"/>
        </div>
    </div>
  )
}

export default Search