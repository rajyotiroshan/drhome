import firestoreDatabse from "../firebaseConfig";
import CryptoJS from "crypto-js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";

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

export const LoginUser = async (payload) => {
  try {
    const qry = query(
      collection(firestoreDatabse, "users"),
      where("email", "==", payload.email)
    );

    const userSnapshots = await getDocs(qry);
    if (userSnapshots.size === 0) {
      throw new Error("User does not exist");
    }

    const user = userSnapshots.docs[0].data();
    const bytes = CryptoJS.AES.decrypt(user.password, "drhome");
    const originalPass = bytes.toString(CryptoJS.enc.Utf8);
    if (originalPass !== payload.password) {
      throw new Error("Incorrect Pass");
    }
    return {
      success: true,
      message: "User logged in successfully",
      data: user,
    };
  } catch (err) {
    return err;
  }
};
