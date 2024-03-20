import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function AuthButtons() {
  return (
    <div className="auth-btns">
      <div className="md:flex justify-center items-center gap-2 min-[290px]:hidden">
        <Button asChild>
          <LoginLink postLoginRedirectURL="/home">Sign in</LoginLink>
        </Button>
        <Button asChild variant="outline">
          <RegisterLink postLoginRedirectURL="/home">Sign up</RegisterLink>
        </Button>
      </div>
    </div>
  );
}
