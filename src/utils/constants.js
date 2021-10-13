export const API_BASE_URL= "blockchain-demo-project.herokuapp.com";

export const API_ENDPOINT = {
    //User Service APIs
   GET_HASH: "/api/hash",
   GET_NONCE: "/api/genesis_block/",
   GET_BLOCKCHAIN: "/api/blockchain",
   UPDATE_BLOCK: "/api/update_block/",
   MINE_BLOCK: "/api/mine_block/"

}
export const API_RESPONSE_STATUS = {
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNKNOWN_ERROR: 502,
    INVALID_CREDENTIALS: 403
}
export const API_RESPONSE_MESSAGE = {
    BAD_REQUEST: "Please check the requested parameter",
    NOT_FOUND: "Requested value doesn't exist",
    UNKNOWN_ERROR: "Some unknown Error occurred on the server",
    INVALID_CREDENTIALS: "Please check the permissions",
    INTERNAL_ERROR: "Error Occurred in sending request "
}

// export const API_BASE_URL ="960878a21f75.ngrok.io";
export const API_TIMEOUT ={ //in ms
    SLOW_TIMEOUT : 10000,
    AVG_TIMEOUT : 10000,
    QUICK_TIMEOUT : 300
}

export const API_TIMEOUT_TYPE = { //in ms
    SLOW_TIMEOUT: "slow",
    AVG_TIMEOUT: "avg",
    QUICK_TIMEOUT: "quick"
}