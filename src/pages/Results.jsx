import { useState } from 'react';
import Footer from '../components/Footer';
import { FaTrashAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import PrivacySection from '../components/PrivacySection';
import { ethers } from 'ethers';
const Results = () => {
    const [file, setFile] = useState(null);
    const [infectionChance, setInfectionChance] = useState(null);

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files?.[0] || null;
        setFile(uploadedFile);
    };

    const handleSubmit = () => {
        if (file) {
            console.log('Uploaded file:', file);
            const reader = new FileReader();
            reader.onload = async (e) => {
                const fileContent = e.target?.result;
                console.log('File content:', fileContent);
                if (!window.ethereum) { alert("Download metamask"); return; }

                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send('eth_accounts', []);
                const contractAddress = "0xAaa0a4CaAb31E4AB8e5c7b3FFAF239CD86E626Ac";
                const contractABI = [
                    {
                        "inputs": [
                            {
                                "internalType": "euint64",
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
                                "internalType": "euint64",
                                "name": "value1",
                                "type": "uint256"
                            },
                            {
                                "internalType": "euint64",
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
                                "internalType": "uint64",
                                "name": "gene",
                                "type": "uint64"
                            }
                        ],
                        "name": "encryptAndRegister",
                        "outputs": [
                            {
                                "internalType": "euint64",
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
                                "internalType": "euint64",
                                "name": "value1",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "euint64",
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
                                "internalType": "uint64",
                                "name": "gene1",
                                "type": "uint64"
                            },
                            {
                                "internalType": "uint64",
                                "name": "gene2",
                                "type": "uint64"
                            },
                            {
                                "internalType": "uint64",
                                "name": "gene3",
                                "type": "uint64"
                            },
                            {
                                "internalType": "uint64",
                                "name": "gene4",
                                "type": "uint64"
                            }
                        ],
                        "name": "encryptGene",
                        "outputs": [
                            {
                                "internalType": "euint64[4]",
                                "name": "encryptedGenes",
                                "type": "uint256[4]"
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
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "euint64",
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
                                "internalType": "uint64",
                                "name": "plaintext",
                                "type": "uint64"
                            },
                            {
                                "indexed": false,
                                "internalType": "euint64",
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
                                "internalType": "euint64",
                                "name": "multiplier",
                                "type": "uint256"
                            }
                        ],
                        "name": "processGeneticInsights",
                        "outputs": [
                            {
                                "internalType": "euint64",
                                "name": "encryptedAdjustedRisk",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getGenomicData",
                        "outputs": [
                            {
                                "internalType": "euint64",
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
                                "internalType": "uint64",
                                "name": "",
                                "type": "uint64"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    }
                ];

                console.log('Accounts:', accounts);
                const signer = await provider.getSigner();
                const contract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    signer
                );
                if (!fileContent) {
                    console.error("Unable to read file content.");
                    return;
                }
                const parsedContent = JSON.parse(fileContent);

                // Access the zama map
                const zamaData = parsedContent.Zama_data;
                let ct = 0;
                const InfectedGenes = ["81999546673995438090046345645919266988114298714759372563582004358556045346816",
                    "9167431600729119867418426573118402672910822473531011829843847239840480233472",
                    "9167431600729119867418426573118402672910822473531011829843847239840480233472",
                    "9167431600729119867418426573118402672910822473531011829843847239840480233472"
                ];
                let indx = 0;
                for (const key in zamaData) {
                    if (zamaData[key] == InfectedGenes[indx]) { ct++; }
                    indx++;
                }
                console.log('File content:j', fileContent);
                console.log("chance of getting infected is ", ct * 100 / 4);
                setInfectionChance(ct * 100 / 4);
            };
            reader.readAsText(file);
        }
    };

    const handleDeleteFile = () => {
        setFile(null);
        setInfectionChance(null);
    };

    const getRiskLevel = (percentage) => {
        if (percentage === 0) return "No Risk";
        if (percentage > 0 && percentage <= 25) return "Very Low Risk";
        if (percentage > 25 && percentage <= 50) return "Low Risk";
        if (percentage > 50 && percentage <= 75) return "Moderate Risk";
        if (percentage > 75 && percentage < 100) return "High Risk";
        return "Very High Risk";
    };

    return (
        <div>
            <Navbar />
            <div className="bg-[#F1FAEE] p-8 text-center">
                {!infectionChance && (
                    <>
                        <h1 className='text-2xl'>Upload Your DNA Passport to Discover Insights</h1>
                        <p>
                            Upload your raw DNA file to unlock personalized health, ancestry, and lifestyle insights. Your privacy is our priority, and your data remains secure.
                        </p>
                        <div
                            className="border-2 border-dashed border-gray-300 p-8 my-8 mx-auto max-w-lg relative cursor-pointer"
                            onClick={() => document.getElementById('fileInput')?.click()}
                        >
                            <div className="text-6xl">
                                📤
                            </div>
                            <p>Drag and drop your file here or Click to Browse</p>
                            <p className="text-gray-500">Supported formats: .json</p>
                            <input
                                id='fileInput'
                                type='file'
                                accept=".json"
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                        </div>
                        {file && (
                            <div className="mt-4 text-gray-800 flex justify-center items-center">
                                <strong>Selected file:</strong> {file.name}
                                <FaTrashAlt className="ml-2 text-red-500 cursor-pointer" onClick={handleDeleteFile} />
                            </div>
                        )}
                        <p className="text-gray-500 mt-4">
                            We do not store your data; it is processed securely and returned immediately
                        </p>
                        <button
                            className={`mt-4 py-2 px-4 text-white border-none ${file ? 'bg-[#FF6F61] cursor-pointer' : 'bg-gray-300 cursor-not-allowed'}`}
                            disabled={!file}
                            onClick={handleSubmit}
                        >
                            Submit and Analyze Results
                        </button>
                    </>
                )}
                {infectionChance !== null && (
                    <div className="mt-8 p-6 bg-[#F1FAEE] border rounded-lg shadow-lg text-left max-w-lg mx-auto">
                        <h2 className="text-2xl font-bold text-[#1D3557] mb-2">Thrombosis</h2>
                        <h3 className="text-xl mb-4 text-[#457B9D]">Analysis Result</h3>
                        <p className="text-lg text-[#1D3557] mb-4">Chance of getting infected: <span className="font-bold">{infectionChance}%</span></p>
                        <p className="text-lg text-[#1D3557] mb-4">Risk Level: <span className="font-bold">{getRiskLevel(infectionChance)}</span></p>
                        <button
                            className="mt-4 py-2 px-4 bg-[#FF6F61] text-white rounded hover:bg-[#E63946] transition-colors duration-300"
                            onClick={handleDeleteFile}
                        >
                            Upload Another File
                        </button>
                    </div>
                )}
            </div>
            <PrivacySection />
            <Footer />
        </div>
    );
};

export default Results;
