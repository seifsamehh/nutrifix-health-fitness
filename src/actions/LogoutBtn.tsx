import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOut } from "lucide-react";

export default function LogoutBtn() {
  return (
    <>
      <Button
        className="min-[290px]:hidden md:block"
        title="Log out"
        aria-label="Log out"
      >
        <LogoutLink postLogoutRedirectURL="/">Log out</LogoutLink>
      </Button>
      <Button
        size={"icon"}
        className="min-[290px]:flex md:hidden"
        title="Log out"
        aria-label="Log out"
      >
        <LogoutLink postLogoutRedirectURL="/">
          <LogOut className="w-4 h-4" />
        </LogoutLink>
      </Button>
    </>
  );
}
