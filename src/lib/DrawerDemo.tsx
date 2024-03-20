"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MoreVertical } from "lucide-react";
import PieChartDemo from "./charts/PieChart";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export function DrawerDemo() {
  return (
    <div className="drawer-nav min-[290px]:block md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon" title="menu" aria-label="menu">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Daily Activity</DrawerTitle>
              <DrawerDescription className="text-background">
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="mt-3 h-full">
                <PieChartDemo />
              </div>
            </div>
            <DrawerFooter>
              <Button asChild>
                <LoginLink postLoginRedirectURL="/home">Sign in</LoginLink>
              </Button>
              <Button asChild variant="outline">
                <RegisterLink postLoginRedirectURL="/home">
                  Sign up
                </RegisterLink>
              </Button>
              <DrawerClose asChild>
                <Button variant="destructive">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
