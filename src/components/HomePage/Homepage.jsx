import BaseInfo from "./EthInfo/BaseInfo";
import LatestInfo from "./LatestInfo";
import Search from "./Search";

const Homepage = () => {
  return (
    <div>
        <Search />
        <BaseInfo />
        <LatestInfo />
    </div>
  )
}

export default Homepage