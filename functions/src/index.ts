import { initializeApp } from "firebase-admin/app";
import { onRequest } from "firebase-functions/https";

initializeApp();

export const helloWorld = onRequest(async (req, res) => {
  res.send("Buenos días");
});
