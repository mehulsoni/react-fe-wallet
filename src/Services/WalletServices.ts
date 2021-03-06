import { authHeaderWithJson, handleResponse } from '../Components/Util';

const validateSignedMessage = (message: any, owner: string, sign: any) => {
    const requestOptions = {
        method: 'POST',
        headers: authHeaderWithJson(),
        body: JSON.stringify({ message, owner, sign }),
    };
    return fetch(`/wallets/validate/message`, requestOptions).then(handleResponse);
};

export const walletService = { validateSignedMessage };
