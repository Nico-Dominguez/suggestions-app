import { Client, Databases } from "appwrite";

const client = new Client();
const DB_ID = "6696ca7b001eb413c5f7";
const COLLECTION_ID = "6696ca9a0009a3c1ca23";

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6696c7cf002474f38bfd");

export const databases = new Databases(client);
export { DB_ID, COLLECTION_ID };
