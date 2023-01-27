import * as admin from "firebase-admin";
import { fireConfig } from "./fireConfig";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: fireConfig.private_key,
      clientEmail: fireConfig.client_email,
      projectId: fireConfig.project_id,
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

export default admin;
