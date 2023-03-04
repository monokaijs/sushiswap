export default {
  "1": [
    {
      "name": "ethereum",
      "chainId": "1",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0x95bd909A9cB3002992E2993846b035545F15ff37",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0x8E190A2173334c67734119791CF63299A7570877",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "5": [
    {
      "name": "goerli",
      "chainId": "5",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0x4947754676098B1D06dE1C602D0086e406154e89",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0x134C28E1aA0b5F339e498951bAEA9165c4Dbea90",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "10": [
    {
      "name": "optimism",
      "chainId": "10",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "56": [
    {
      "name": "bsc",
      "chainId": "56",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "100": [
    {
      "name": "gnosis",
      "chainId": "100",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "137": [
    {
      "name": "polygon",
      "chainId": "137",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "199": [
    {
      "name": "bttc",
      "chainId": "199",
      "contracts": {
        "FuroStream": {
          "address": "0x3DB923FBaB372ab8c796Fef9bb8341CdB37cB9eC",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0xc5017BE80b4446988e8686168396289a9A62668E",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x5629CE74DdCAD7Cc72b3Ea30444dA7172AD851D9",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0xBD87Bef520f8CEC45d73B0413B6cBb8b061736d9",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "250": [
    {
      "name": "fantom",
      "chainId": "250",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "1284": [
    {
      "name": "moonbeam",
      "chainId": "1284",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "1285": [
    {
      "name": "moonriver",
      "chainId": "1285",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "31337": [
    {
      "name": "hardhat",
      "chainId": "31337",
      "contracts": {}
    }
  ],
  "42161": [
    {
      "name": "arbitrum",
      "chainId": "42161",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0xf30CF8D373D78D7964A2F7793b730BF7ae0970a8",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0x312A8E33d78d3Ab79E62971E86e5e8c9c5E28D64",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "43114": [
    {
      "name": "avalanche",
      "chainId": "43114",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroStreamRouter": {
          "address": "0x4947754676098B1D06dE1C602D0086e406154e89",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroStream",
                  "name": "_furoStream",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoStream",
              "outputs": [
                {
                  "internalType": "contract IFuroStream",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVestingRouter": {
          "address": "0x134C28E1aA0b5F339e498951bAEA9165c4Dbea90",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IFuroVesting",
                  "name": "_furoVesting",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InsufficientShares",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "minShare",
                  "type": "uint256"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "furoVesting",
              "outputs": [
                {
                  "internalType": "contract IFuroVesting",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "1666600000": [
    {
      "name": "harmony",
      "chainId": "1666600000",
      "contracts": {
        "FuroStream": {
          "address": "0x4ab2FC6e258a0cA7175D05fF10C5cF798A672cAE",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidEndTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStartTime",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidWithdrawTooMuch",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotSenderOrRecipient",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "Overflow",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "endTime",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "indexed": true,
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "UpdateStream",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "cancelStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "createStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "getStream",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint128",
                      "name": "depositedShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "withdrawnShares",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint64",
                      "name": "startTime",
                      "type": "uint64"
                    },
                    {
                      "internalType": "uint64",
                      "name": "endTime",
                      "type": "uint64"
                    }
                  ],
                  "internalType": "struct IFuroStream.Stream",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                }
              ],
              "name": "streamBalanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "senderBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "streamIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "streams",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint128",
                  "name": "depositedShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "withdrawnShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "startTime",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "endTime",
                  "type": "uint64"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "updateSender",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "topUpAmount",
                  "type": "uint128"
                },
                {
                  "internalType": "uint64",
                  "name": "extendTime",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "updateStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "streamId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharesToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "withdrawTo",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                }
              ],
              "name": "withdrawFromStream",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "recipientBalance",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        },
        "FuroVesting": {
          "address": "0x0689640d190b10765f09310fCfE9C670eDe4E25B",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidStart",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidStepSetting",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotOwner",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotVestReceiver",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "ApprovalForAll",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "ownerAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "recipientAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CancelVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "fromBentoBox",
                  "type": "bool"
                }
              ],
              "name": "CreateVesting",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "LogUpdateOwner",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "Withdraw",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "PERCENTAGE_PRECISION",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint32",
                      "name": "start",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "cliffDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "stepDuration",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "steps",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint128",
                      "name": "stepPercentage",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "amount",
                      "type": "uint128"
                    },
                    {
                      "internalType": "bool",
                      "name": "fromBentoBox",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct IFuroVesting.VestParams",
                  "name": "vestParams",
                  "type": "tuple"
                }
              ],
              "name": "createVesting",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "depositedShares",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "getApproved",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isApprovedForAll",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "ownerOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "safeTransferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setBentoBoxApproval",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_fetcher",
                  "type": "address"
                }
              ],
              "name": "setTokenURIFetcher",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "stopVesting",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "tokenURI",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "tokenURIFetcher",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "updateOwner",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                }
              ],
              "name": "vestBalance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "vestIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "vests",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint32",
                  "name": "start",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "cliffDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "stepDuration",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "steps",
                  "type": "uint32"
                },
                {
                  "internalType": "uint128",
                  "name": "cliffShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "stepShares",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "claimed",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "wETH",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "vestId",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "taskData",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "toBentoBox",
                  "type": "bool"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        }
      }
    }
  ]
} as const