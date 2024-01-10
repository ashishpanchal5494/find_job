import About from "./jobdetails/about/About";
import Specifics from "./jobdetails/specifics/Specifics";

const DisplayTabContent = ({activeTab, data}) => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ['N/A']}
          />
        )
       
      case "About":
        return (
         <About 
         info={data[0].job_description ?? "No data provided"}/>
        )
      case "Responsiblities":
        return (
            <Specifics
            title="Responsiblities"
            points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
          />
        )
      default:
        return null;
    }
  };

  export default DisplayTabContent