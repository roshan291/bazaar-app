import CryptoJS from 'crypto-js';

// Encryption function
export const encryptMessage = (message: any, secretKey: any) => {
    // Encrypt the message using AES
    const ciphertext = CryptoJS.AES.encrypt(message, secretKey).toString();
    return ciphertext;
};

// Decryption function
export const decryptMessage = (ciphertext: any, secretKey: any) => {
    // Decrypt the message using AES
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    const originalMessage = bytes.toString(CryptoJS.enc.Utf8);
    return originalMessage;
};
