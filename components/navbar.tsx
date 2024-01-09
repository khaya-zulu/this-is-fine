"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-between font-playpen">
      <Link href="/" className="p-2">
        This is Fine
      </Link>
      <div className="flex gap-5">
        <Link href="/" className="p-2 border-b-2 border-iris-800">
          Home
        </Link>

        <Link href="/sign-in" className="p-2">
          Sign In
        </Link>

        {/* <form action="/auth/sign-in" method="post">
          <button className="p-2" type="submit">
            Login
          </button>
        </form> */}
      </div>
    </div>
  );
};
