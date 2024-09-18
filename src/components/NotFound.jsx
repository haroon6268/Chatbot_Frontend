import { useRouteError } from "react-router-dom";
import notFound from "../assets/notFound.png";
const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-5xl font-bold text-primary">Oops!</h1>
      <img src={notFound} className="h-[200px] w-[200px]" />
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>

      <p>
        <i>{error.status + ": " + error.statusText || error.message}</i>
      </p>
    </div>
  );
};
export default NotFound;
