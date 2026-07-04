"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <main className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/30">
        {status === "loading" ? (
          <p className="text-center text-lg">Loading session…</p>
        ) : session ? (
          <div className="space-y-6 text-center">
            <p className="text-xl font-semibold">Welcome back</p>
            <p className="text-sm text-slate-600">
              Signed in as {session.user?.name ?? session.user?.email}
            </p>
            <button
              onClick={() => signOut()}
              className="mx-auto rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="space-y-6 text-center">
            <p className="text-xl font-semibold">Sign in with Google</p>
            <button
              onClick={() => signIn("google")}
              className="mx-auto rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-500"
            >
              Continue with Google
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
