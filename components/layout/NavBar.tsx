"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import Container from "../Container";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SearchInput from "../SreachInput";
import { ModeToggle } from "../theme-toggle";
import { NavMenu } from "./NavMenu";

const NavBar = () => {
  const router = useRouter();
  const UserId = useAuth();
  return (
    <div className="border border-b-slate-500">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <div
            className="flex flex-row items-center gap-x-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <img src="/logo.svg" alt="logo" height={30} width={30} />
            <p>Booking Darkin</p>
          </div>
          <SearchInput />
          <div className="flex flex-row items-center gap-x-3">
            <ModeToggle />
            <NavMenu />
            <UserButton afterSignOutUrl="" />
            {!UserId.isSignedIn && (
              <>
                <Button
                  variant="outline"
                  onClick={() => router.push("/sign-in")}
                >
                  Sign in
                </Button>
                <Button onClick={() => router.push("/sign-up")}>Sign up</Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
