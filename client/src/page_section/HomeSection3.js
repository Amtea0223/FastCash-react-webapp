import EstimateForm from "../component/EstimateForm";
import house from "../images/home/home_house.png";
import form_bg from "../images/applyform_bg.png"
import "./homeSection.css"

const HomeSection3 = ({ content }) => {
  return (
    <div className="home-section">
      <div className="home-section3">
        <div className="estimate-container estimate-bg">
          <div className="estimateForm-bg">
            {/* <img src={form_bg}/> */}
            <EstimateForm content={content} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
