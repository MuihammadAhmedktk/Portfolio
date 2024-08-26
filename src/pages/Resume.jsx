import AllInfo from "../componets/AllInfo/AllInfo"
import { heading, ExperData,Button } from "../Date"

const Resume = () => {
  return (
    <div className="min-h-[80vh] flex  items-center justify-center my-12 xl:py-0">
      <AllInfo Button={Button} heading={heading} ExperData={ExperData} />

     
    </div>
  );
}



export default Resume
