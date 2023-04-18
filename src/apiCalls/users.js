import firestoreDatabse from "../firebaseConfig";

import { collection, addDoc } from "firebase/firestore";

export const CreateUser = async (payload) => {
  try {
    const docRef = collection(firestoreDatabse, "users");
    await addDoc(docRef, payload);
    return {
      success: true,
      message: "User created succesffuly",
    };
  } catch (err) {
    return err;
  }
};
