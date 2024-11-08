import { useState } from "react";
import { account, ID } from "../actions/appwrite";

type User = {
  name: string;
  // password: string
  // email: string
  // Add other properties of the user object if necessary
};

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    await account.createEmailPasswordSession(email, password);
    setIsLoading(false);
  };

  const register = async () => {
    await account.create(ID.unique(), form.email, form.password);
    login(form.email, form.password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div>
        <p>Logged in as {isLoading.name}</p>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Not logged in</p>
      <form>
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
        <button
          type="button"
          disabled={isLoading}
          onClick={() => login(email, password)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
