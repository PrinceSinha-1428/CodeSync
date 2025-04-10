import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, } from "@clerk/nextjs";

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
