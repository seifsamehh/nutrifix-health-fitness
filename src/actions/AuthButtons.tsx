import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { LogIn } from "lucide-react";

const AuthButtons = () => {
  const signInButton = (
    <LoginLink postLoginRedirectURL="/home">
      Sign in
      <LogIn className="ml-2" />
    </LoginLink>
  );
  const signUpButton = (
    <RegisterLink postLoginRedirectURL="/home">Sign up</RegisterLink>
  );

  return (
    <div className="auth-btns">
      <div className="xl:flex justify-center items-center gap-2 min-[290px]:hidden">
        <Button asChild>{signInButton}</Button>
        <Button asChild variant="outline">
          {signUpButton}
        </Button>
      </div>
    </div>
  );
};

export default AuthButtons;
