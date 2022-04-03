import Registration from "../../components/auth/registration/registration.component";
import SignIn from "../../components/auth/sign-in/sign-in.component";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="text-center">
        <div className=" text-2xl font-bold">Welcome</div>
        <div className="text-xml">Please Sign in or register</div>
        <div>
          This is a sample project so you can check my code. You can find the
          code on my github.
          <div>
            Frontend:
            <a
              className="text-blue-500"
              href="https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies"
              target="_blank"
              rel="noreferrer"
            >
              Click here to visit
            </a>
          </div>
          <div>
            Backend:
            <a
              className="text-blue-500"
              href="https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies"
              target="_blank"
              rel="noreferrer"
            >
              Click here to visit
            </a>
          </div>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col justify-between">
        <Registration></Registration>
        <SignIn></SignIn>
      </div>
    </div>
  );
};

export default HomePage;
