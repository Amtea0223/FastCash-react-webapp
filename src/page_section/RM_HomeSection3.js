import EstimateForm from "../component/EstimateForm";
import house from "../images/home/home_house.png";

const HomeSection3 = ({ content }) => {
  return (
    <div className="home-section">
      <div className="home-section3">
        <div className="estimate-container">
          <img className="estimate-house" src={house} alt="" />
          <EstimateForm content={content} />
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
