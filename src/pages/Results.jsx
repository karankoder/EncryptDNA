import { useState } from 'react';
import Footer from '../components/Footer';
import { FaTrashAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import PrivacySection from '../components/PrivacySection';

const Results = () => {
    const [file, setFile] = useState(null);

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files?.[0] || null;
        setFile(uploadedFile);

        if (uploadedFile) {
            console.log('Uploaded file:', uploadedFile);
            const reader = new FileReader();
            reader.onload =async (e) => {
                const fileContent = e.target?.result;
                console.log('File content:', fileContent);
                if(!window.ethereum){alert("Downlaod metamask");return;}

                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const accounts = await provider.send('eth_accounts', []);
                const contractAddress ="0x07E8bD80C228CF5812E20Bfe8223485c53B0BD44";
                const contractABI=[
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
                        "name": "encrypt",
                        "outputs": [],
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
                        "outputs": [
                            {
                                "internalType": "euint256[4]",
                                "name": "encryptedGenes",
                                "type": "uint256[4]"
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
                        "name": "virtu",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    }
                ];

                console.log('Accounts:', accounts);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    signer
                );
                const data=await contract.encryptAndRegister(1);
                await data.wait();
                console.log('Data:', data);
                if (!fileContent) {
                    console.error("Unable to read file content.");
                    return;
                }
                console.log('File content:', fileContent);
            };
            reader.readAsText(uploadedFile);
        }
    };

    const handleDeleteFile = () => {
        setFile(null);
    };

    return (
        <div>
            <Navbar />
            <div className="bg-[#F1FAEE] p-8 text-center">
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
                >
                    Submit and Analyze Results
                </button>
            </div>
            <PrivacySection />  
            <Footer />
        </div>
    );
};

export default Results;
