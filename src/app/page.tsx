import {SignedIn,SignedOut, SignInButton, SignUpButton, UserButton,} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-20">
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
