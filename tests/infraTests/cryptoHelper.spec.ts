import { expect } from "chai";
import 'mocha';

import { CryptoHelper } from '../../src/infra/cryptoHelper';

describe('Crypto Tests', () => {

    const _scret: string = "bla-bla-bla";
    const _passwordEncrypted = "0267ee282b90d700838dd81885d46ff0";
    const _passowrd: string = "Mudar@123";

    it('Should be success - encrypt', () => {
        //arrange
        const crypt = new CryptoHelper(_scret);

        //action
        const encrypted: string = crypt.encrypt(_passowrd);

        //assert
        expect(encrypted == _passowrd).to.equal(false);
        expect(encrypted == _passwordEncrypted).to.equal(true);
    });

    it('should be success - decrypt', () => {
        //arrange
        const crypt = new CryptoHelper(_scret);

        //action
        const decrypted: string = crypt.decrypt(_passwordEncrypted);

        //assert
        expect(decrypted == _passwordEncrypted).to.equal(false);
        expect(decrypted == _passowrd).to.equal(true);
    });
});