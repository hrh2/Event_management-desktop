const { initializeApp } = require("firebase/app");
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { firebaseConfig }= require('../firebaseConfig');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

// Function to upload images to Firebase Storage and return the image URLs
async function uploadImagesToFirebase(images) {
     const imageUrls = [];

     for (let i = 0; i < images.length; i++) {
          const image = images[i];
          const fileName = `venue-image-${Date.now()}-${i + 1}`;
          const storageRef = ref(storage, fileName);
          try {
               // Upload the image file to Firebase Storage
               await uploadBytes(storageRef, image);

               // Get the download URL for the uploaded image
               const downloadURL = await getDownloadURL(storageRef);
               imageUrls.push(downloadURL);
          } catch (error) {
               console.error(`Error uploading image ${i + 1}:`, error);
          }
     }

     return imageUrls;
}
