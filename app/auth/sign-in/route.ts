import { supabase } from "~/supabase";

import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const requestUrl = new URL(request.url);

  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/sign-in?error=Could not authenticate user`,
      { status: 301 }
    );
  }

  return NextResponse.redirect(requestUrl.origin, { status: 301 });
};
