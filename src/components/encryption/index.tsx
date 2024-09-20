import React, { useState } from 'react';
import { decryptMessage, encryptMessage } from './encryption';

const EncryptionDemo = () => {
    const [message, setMessage] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [decryptedMessage, setDecryptedMessage] = useState('');

    // Handle message encryption
    const handleEncrypt = () => {
        const encrypted = encryptMessage(message, secretKey);
        setEncryptedMessage(encrypted);
    };

    // Handle message decryption
    const handleDecrypt = () => {
        const decrypted = decryptMessage(encryptedMessage, secretKey);
        setDecryptedMessage(decrypted);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Encryption and Decryption Demo</h2>
            
            <div>
                <label>Message:</label>
                <input 
                    type="text" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Enter your message" 
                    style={{ marginRight: '10px' }}
                />
            </div>
            
            <div>
                <label>Secret Key:</label>
                <input 
                    type="text" 
                    value={secretKey} 
                    onChange={(e) => setSecretKey(e.target.value)} 
                    placeholder="Enter a secret key"
                    style={{ marginRight: '10px' }}
                />
            </div>

            <div>
                <button onClick={handleEncrypt}>Encrypt Message</button>
            </div>
            
            <div>
                <label>Encrypted Message:</label>
                <textarea value={encryptedMessage} readOnly  />
            </div>
            
            <div>
                <button onClick={handleDecrypt}>Decrypt Message</button>
            </div>

            <div>
                <label>Decrypted Message:</label>
                <textarea value={decryptedMessage} readOnly  />
            </div>
        </div>
    );
};

export default EncryptionDemo;
