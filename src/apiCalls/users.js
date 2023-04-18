import firestoreDatabse from "../firebaseConfig";
import CryptoJS from "crypto-js";
import { collection, addDoc, getDoc, query, where, getDocs } from "firebase/firestore";

export const CreateUser = async (payload) => {
  try {
    const qry = query(
      collection(firestoreDatabse, "users"),
      where("email", "==", payload.email)
    );
    const querySnapshot = await getDocs(qry);
    if (querySnapshot.size > 0) {
      throw new Error("User alreay exist");
    }

    const hashedPass = CryptoJS.AES.encrypt(
      payload.password,
      "drhome"
    ).toString();
    payload.password = hashedPass;

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
