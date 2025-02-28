import AllInfo from "../components/AllInfo/AllInfo"
import { heading, ExperData,Button } from "../Date"

const Resume = () => {
  return (
    <div className="min-h-[50vh] flex  items-center justify-center mt-10 ">
      <AllInfo Button={Button} heading={heading} ExperData={ExperData} />

     
    </div>
  );
}



export default Resume
