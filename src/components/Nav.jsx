import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 w-full bg-neutral flex-[0.1]">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow bg-neutral"
        >
          <li>
            <a onClick={() => navigate("/")} className="text-xl">
              Homepage
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/phishing")} className="text-xl">
              Phising Detector
            </a>
          </li>
        </ul>
      </div>
      <a
        className="btn btn-ghost text-2xl font-bold"
        onClick={() => navigate("/")}
      >
        VIP AI/CyberSecurity
      </a>
    </div>
  );
};

export default Nav;
