/**
 * =================================================================
 * Encrypt and Decrypt String Messages.
 */
var CryptoJS = require("crypto-js");
// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
console.log('Password is encrypted', ciphertext);
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);
console.log(originalText); // 'my message'

/**
================================================================
Encrypt and Decrypt Object
*/
var CryptoJS = require("crypto-js");
var data = [{id: 1}, {id: 2}]
// Encrypt
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
console.log("Object encrypted", ciphertext);
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
console.log(decryptedData); // [{id: 1}, {id: 2}]