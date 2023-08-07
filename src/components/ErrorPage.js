import "../styles/ErrorPage.scss";
import Header from "./Header";

import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="ErrorPage">
      <Header />
      <h1>Oops!</h1>
      <p>Sorry, this page is not ready yet or does not exist.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
