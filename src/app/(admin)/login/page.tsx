// admin/LoginPage.tsx
"use client";
import { useState } from "react";
import { account, signup } from "@/actions/appwrite";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    const res = await signup(form.email, form.password);
    if (res) {
      return router.replace("/dashboard");
    }
    console.log(res);
  };

  return (
    <div className="w-1/2 mx-auto flex flex-col">
      <form
        className="flex flex-col justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button className="bg-red-900 px-5 py-1" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
