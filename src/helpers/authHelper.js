import crypto from 'crypto-js'
import oauth1a from 'oauth-1.0a'

const CONSUMERKEY = 'ck_072ac448907ae431ff878e1cc601852cc406e44f';
const CONSUMERSECRET = 'cs_2a1ac9efd9dd38f05c10c520fccdf9bdcdd328af';

class Oauth1Helper {
    static getAuthHeaderForRequest(request) {
        const oauth = oauth1a({
            consumer: { key: CONSUMERKEY, secret: CONSUMERSECRET },
            signature_method: 'HMAC-SHA1',
            hash_function(base_string, key) {
                return crypto.algo.HMAC
                    .create(crypto.algo.SHA1, key)
                    .update(base_string)
                    .finalize()
                    .toString(crypto.enc.Base64);
            },
        });

        const authorization = oauth.authorize(request);

        return oauth.toHeader(authorization);
    }
}

export default Oauth1Helper;