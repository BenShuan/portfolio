import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = { appName: "ChatApp" };

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoClient;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
}


export async function connectProjectsCollection() {
  
  try {
    const clientPromise = await client.connect();
    const db = clientPromise.db("portfolio");
    return db;
  } catch (error) {
    throw new Error("Unable to connect mongoDB");
  }

}

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.

export default client;