
import { initializeApp } from "firebase/app";
import { getAuth , 
     signInWithRedirect,
     GoogleAuthProvider,
     signInWithPopup, 
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged
     } from "firebase/auth";
import {getFirestore ,
     doc ,
      getDoc ,
       setDoc,
    collection,
    writeBatch,
    query,
    getDocs
    } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDvpDJMC-2HjVEksxhTapfo-tNGbn7_VVU",
  authDomain: "crwn-shop-5b808.firebaseapp.com",
  projectId: "crwn-shop-5b808",
  storageBucket: "crwn-shop-5b808.appspot.com",
  messagingSenderId: "584831019092",
  appId: "1:584831019092:web:3e3e836dbbedea1f0d65c1"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt :"select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => {
return    signInWithPopup(auth , googleProvider)
}

export const signInWithGoogleRedirect = () => {
    return signInWithRedirect(auth, googleProvider)
}

export const db = getFirestore();

export const addCollectionAndDocument = async(collectionKey , objectToAdd) => {
    const collectionRef = collection(db , collectionKey)
    const batch = writeBatch(db)

    objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
        
    });

    await batch.commit();
    // console.log("done")
}

export const getCategoriesAndDocuments = async () => {
 const collectionRef = collection(db , "categories");
 const q = query(collectionRef)
 const querySnapShot = await getDocs(q)
 const categoryMap = querySnapShot.docs.reduce((acc , docSampleSnapShot) => {
    const {title , items} = docSampleSnapShot.data()
    acc[title.toLowerCase()] = items
    return acc
 } , {})
 return categoryMap
}




export const createUserDocumentFromAuth = async (userAuth , additionalInformation ={}) => {
    if(!userAuth) return;
    const userDataRef = doc(db,"users",userAuth.uid);
    // console.log(userDataRef);
    const userSnapshot = await getDoc(userDataRef)
    // console.log(userSnapshot)

    if(!userSnapshot.exists()){
        const {displayName , email} = await userAuth
        const createAt = new Date();

        try{
            await setDoc(userDataRef, {
                displayName ,
                email ,
                createAt,
                ...additionalInformation
            })
        }catch(error){
            alert("Error Message: " + error.message)
        }
        return userDataRef;

    }

}


export const createAuthUserWithEmailAndPassword = async (email , password) => {
if(!email || !password) return;
return await createUserWithEmailAndPassword(auth, email, password)
}
export const signAuthUserWithEmailAndPassword = async (email , password) => {
if(!email || !password) return;
return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedUser = (callback) => onAuthStateChanged(auth , callback );