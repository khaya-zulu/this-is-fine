import { NextPage } from "next";

const SignInPage: NextPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <form action="/auth/sign-in" method="post">
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Sign in</button>
      </form>

      <hr />

      <form action="/auth/sign-up" method="post">
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default SignInPage;
