const contractABI = [
    {
        "inputs": [
            {
                "internalType": "euint256",
                "name": "encryptedTraitRisk",
                "type": "uint256"
            },
            {
                "internalType": "ebool",
                "name": "encryptedIsCarrier",
                "type": "uint256"
            }
        ],
        "name": "addGenomicData",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "euint256",
                "name": "value1",
                "type": "uint256"
            },
            {
                "internalType": "euint256",
                "name": "value2",
                "type": "uint256"
            }
        ],
        "name": "compareEncryptedValues",
        "outputs": [
            {
                "internalType": "ebool",
                "name": "isEqual",
                "type": "uint256"
            },
            {
                "internalType": "ebool",
                "name": "isGreater",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gene",
                "type": "uint256"
            }
        ],
        "name": "encryptAndRegister",
        "outputs": [
            {
                "internalType": "euint256",
                "name": "encryptedGene",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "euint256",
                "name": "value1",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "euint256",
                "name": "value2",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "ebool",
                "name": "isEqual",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "ebool",
                "name": "isGreater",
                "type": "uint256"
            }
        ],
        "name": "EncryptedValuesCompared",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gene1",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "gene2",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "gene3",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "gene4",
                "type": "uint256"
            }
        ],
        "name": "encryptGene",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "euint256",
                "name": "encryptedRisk",
                "type": "uint256"
            }
        ],
        "name": "GeneticInsightProcessed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "GenomicDataAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "plaintext",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "euint256",
                "name": "encryptedValue",
                "type": "uint256"
            }
        ],
        "name": "IntegerEncrypted",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "euint256",
                "name": "multiplier",
                "type": "uint256"
            }
        ],
        "name": "processGeneticInsights",
        "outputs": [
            {
                "internalType": "euint256",
                "name": "encryptedAdjustedRisk",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "get_genes",
        "outputs": [
            {
                "internalType": "euint256[4]",
                "name": "",
                "type": "uint256[4]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getGenomicData",
        "outputs": [
            {
                "internalType": "euint256",
                "name": "encryptedTraitRisk",
                "type": "uint256"
            },
            {
                "internalType": "ebool",
                "name": "encryptedIsCarrier",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "testing",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
];

export default contractABI;