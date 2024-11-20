import { CohereClient } from "cohere-ai";

console.log(process.env.NEXT_PUBLIC_API_URL, process.env.COHERE_API_KEY);

const cohere = new CohereClient({
  token: process.env.NEXT_PUBLIC_API_URL,
});

export default cohere;
