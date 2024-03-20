"use client";
import { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "./utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center min-[290px]:hidden md:block">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/privacy">Privacy Policy</HoveredLink>
            <HoveredLink href="/terms">Terms & Conditions</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Workout Planner"
              href="/sign-up"
              src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709074546/NutriFix/Dumbbell_HD_k8mxay.png"
              description="Plan your next workout and stay motivated"
            />
            <ProductItem
              title="Meal Planner"
              href="/sign-up"
              src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709074826/NutriFix/3D_Veggie_Salad_Model_Greens_In_Blue_Bowl_HD_h62t1i.png"
              description="Plan your meals and stay healthy"
            />
            <ProductItem
              title="Calories Estimation"
              href="/sign-up"
              src="https://res.cloudinary.com/dp9iqarvw/image/upload/v1709075141/NutriFix/Fast_Food_HD_bi2ax5.png"
              description="Estimate your daily calorie needs"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Android App</HoveredLink>
            <HoveredLink href="/">ios App</HoveredLink>
            <HoveredLink href="/feedback">Give Feedback</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
