// import { Client, Account, Databases, Query, ID } from "appwrite";
import { Client, Users, Databases, Query, ID } from "node-appwrite";

let client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("6728adab0036bd1a63cb") // Your project ID
  .setKey(process.env.APPWRITE_SECRET_KEY!) // Your secret API key
  .setSelfSigned(true); // Use only on dev mode with a self-signed SSL cert

// export const client = new Client();

// client
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("6728adab0036bd1a63cb"); // Replace with your project ID

export const account = new Users(client);
export const database = new Databases(client);
export { ID } from "appwrite";

export async function User() {
  return await database.listDocuments(
    "6728ae0e002eb93c6ac5",
    "6728b313002316a1e68a",
    [Query.equal("name", "email")]
  );
}

export async function signup(email: string, password: string) {
  try {
    const res = await account.create(ID.unique(), email, password);
    if (res) {
      const result = await account.createBcryptUser(
        ID.unique(),
        email,
        password
      );
      return { data: result };
    } else {
      return {
        error: "Check your details",
      };
    }
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
}
