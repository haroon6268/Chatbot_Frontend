import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="hero bg-base-200 flex-1">
      <div className="hero-content text-center">
        <div className="max-w-lg space-y-5">
          <h1 className="text-5xl font-bold header-gradient">
            Welcome to the AI/CyberSecurity VIP Lab at VCU!
          </h1>
          <button
            className="btn btn-primary w-full"
            onClick={() => navigate("/phishing")}
          >
            Phishing Detector
          </button>
          <div className="stack w-full">
            <button className="btn btn-primary w-full">Coming Soon...</button>
            <button className="btn btn-secondary w-full ">
              Coming Soon...
            </button>
            <button className="btn btn-accent w-full">Coming Soon...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
