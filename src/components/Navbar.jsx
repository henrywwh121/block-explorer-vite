import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center md:px-52 px-6 py-4 border-b border-[#273343]">
      <div className="">
        <h3 className="text-white font-poppins">EtherScan</h3>
      </div>
      <ul className="sm:flex hidden">
        {["BlockChain", "Tokens", "NFTS"].map((item, index) => {
          return (
            <li
              key={index}
              className="text-white font-poppins mx-4 cursor-pointer"
            >
              {item}
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex text-white">
        <BiMenuAltRight className="w-[24px] h-[24px]"/>
      </div>

    </nav>
  );
};

export default Navbar;
