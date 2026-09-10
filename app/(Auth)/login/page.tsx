"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import { TextField } from "../../helper";
import { authenticateFakeUser } from "../../config/fake-users";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user = authenticateFakeUser(email, password);

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    window.localStorage.setItem("lms-fake-user", JSON.stringify(user));
    router.push(user.role === "admin" ? "/admin" : "/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <section className="card w-full max-w-md p-6">
        <div className="mb-6 rounded-lg bg-primary p-5 text-white">
          <h1 className="text-2xl font-bold">School Portal</h1>
          <p className="mt-1 text-sm text-indigo-100">
            Sign in to view your dashboard.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error && (
            <p className="form-error-message" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" variant="primary" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="mt-6 rounded-lg bg-slate-50 p-4 text-xs text-slate-600">
          <p>
            <strong>Admin:</strong> admin@example.com / admin123
          </p>
          <p className="mt-1">
            <strong>Student:</strong> student@example.com / student123
          </p>
        </div>
      </section>
    </main>
  );
}
