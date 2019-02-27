import * as crypto from 'crypto';

export class CryptoHelper {
    private cryptoData = <ICryptoData>{};

    constructor(secret: string) {
        this.cryptoData.algorithm = "aes256";
        this.cryptoData.coding = "utf8";
        this.cryptoData.secret = secret;
        this.cryptoData.type = "hex";        
    }

    public encrypt(value: string): string{
        const cipher = crypto.createCipher(this.cryptoData.algorithm, this.cryptoData.secret);
        cipher.update(value);
        return cipher.final(this.cryptoData.type);
    }

    public decrypt(value: string): string{
        const decipher = crypto.createDecipher(this.cryptoData.algorithm, this.cryptoData.secret);
        decipher.update(value, <crypto.HexBase64BinaryEncoding>this.cryptoData.type);
        return decipher.final().toString();
    }

}

interface ICryptoData {
    algorithm: string;
    coding: string;
    secret: string;
    type: string;
}