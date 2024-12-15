import { useState } from 'react';
import Footer from '../components/Footer';
import { FaTrashAlt } from 'react-icons/fa';
import { ethers } from 'ethers';
import { useConnectWallet } from '@web3-onboard/react';

import Navbar from '../components/Navbar';
import PrivacySection from '../components/PrivacySection';

const UploadDNA = () => {
    const [{ wallet }] = useConnectWallet();
    const [file, setFile] = useState(null);
    console.log(import.meta.env.VITE_APP_ALLERGIC_GENE);
    if(!window.ethereum){alert("Please install metamask extension to proceed further"); return;}

    const geneCombinations = {
        "AA": 1,           // this is just an example, feeling sleepy so given an example data
        "AB": 2,
        "BA": 3,
        "BB": 4,
        "CC": 5,
        "CG": 6,
        "TT":7,

    };
    // process of accessing the key value pair
    console.log(geneCombinations["AA"]);
    const init = async () => {
        await initFhevm(); // Load TFHE
        console.log("hello");
        return createInstance({
          kmsContractAddress: "0x904Af2B61068f686838bD6257E385C2cE7a09195",
          aclContractAddress: "0x9479B455904dCccCf8Bc4f7dF8e9A1105cBa2A8e",
          network: window.ethereum,
          gatewayUrl: "https://gateway.zama.ai/",
        });
      };
      

    const checkThrombophiliaRisk = (data) => {
        const thrombophiliaMarkers = {
            rs10811661: import.meta.env.VITE_APP_ALLERGIC_GENE,
            rs1111875: "CC",
            rs13266634: "CC",
            rs1801282: "CC"
        };

        const { Zama_data } = data;
        const riskFactors = [];

        Object.entries(thrombophiliaMarkers).forEach(([gene, riskyGenotype]) => {
            if (Zama_data[gene] === riskyGenotype) {
                riskFactors.push(`${gene}: ${riskyGenotype}`);
            }
        });

        return riskFactors.length > 0
            ? `The user has a potential predisposition for Thrombophilia due to the following markers: ${riskFactors.join(", ")}.`
            : "The user does not show significant genetic markers associated with a higher risk of Thrombophilia.";
    };

    const handleFileUpload = async (event) => {
        const uploadedFile = event.target.files?.[0] || null;
        setFile(uploadedFile);

        if (uploadedFile) {
            console.log('Uploaded file:', uploadedFile);
            const reader = new FileReader();
            reader.onload = async (e) => {
                if(!window.ethereum){alert("Please install metamask extension to proceed further"); return;}
                
                const fileContent = e.target?.result;
                console.log('File content:', fileContent);
                if (!fileContent) {
                    console.error("Unable to read file content.");
                    return;
                }
                
                const userAddress= wallet?.accounts[0].address || '';
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send('eth_accounts', []);
                const contractAddress ="0x6D89566417387ad0905E25436F36196B528F7001";
                const contractABI=[
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
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "encryptedGenes",
                        "outputs": [
                            {
                                "internalType": "euint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
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

                console.log('Accounts:', accounts);
                const signer =await provider.getSigner();
                const contract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    provider
                );
                const Maincontract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    signer
                );
                const lines = fileContent.trim().split('\n');
                const dataLines = lines.filter(line => !line.startsWith('#'));
                const genotypeData = {};
                dataLines.forEach(line => {
                    const [rsid, , , genotype] = line.split('\t');
                    genotypeData[rsid] = genotype.trim();
                });

                const targetKeys = ["rs10811661", "rs1111875", "rs13266634", "rs1801282"];
                console.log('Target keys:', targetKeys);
                const ZamaData = {};
                const genes=[];
                targetKeys.forEach(key => {
                    console.log(genotypeData[key]);
                    genes.push(geneCombinations[genotypeData[key]]);
                });
                const tx=await Maincontract.encryptGene(genes[0],genes[1],genes[2],genes[3]);
                await tx.wait();
                const encryptedGene = await contract.get_genes();
                console.log("Encrypted Gene Value:", encryptedGene);
                let indx=0;
                targetKeys.forEach(key => {
                    ZamaData[key]=encryptedGene[0].toString();
                    indx++;
                });
                const finalJson = {
                    passport_id: import.meta.env.VITE_APP_PASSWORD_ID,
                    filename_hash: import.meta.env.VITE_APP_FILENAME_HASH,
                    data_hash: import.meta.env.VITE_APP_DATA_HASH,
                    Zama_data: ZamaData
                };

                console.log('Final JSON:', JSON.stringify(finalJson, null, 2));
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
                <h1 className='text-2xl'>Upload Your Raw Genomic Data</h1>
                <p>
                    We accept files from 23andMe and other personal genomics services.
                    Your data will remain encrypted and private.
                </p>
                <div
                    className="border-2 border-dashed border-gray-300 p-8 my-8 mx-auto max-w-lg relative cursor-pointer"
                    onClick={() => document.getElementById('fileInput')?.click()}
                >
                    <div className="text-6xl">
                        📤
                    </div>
                    <p>Drag and drop your file here or Click to Browse</p>
                    <p className="text-gray-500">Supported formats: .txt</p>
                    <input
                        id='fileInput'
                        type='file'
                        accept=".txt"
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
                    Don’t have your own 23andMe data? Use this <a href="https://my.pgp-hms.org/public_genetic_data?utf8=%E2%9C%93&data_type=23andMe&commit=Search"
                        target="_blank" rel="noreferrer"
                        className="text-blue-500 underline">link</a> to find example datasets.
                </p>
                <button
                    className={`mt-4 py-2 px-4 text-white border-none ${file ? 'bg-[#FF6F61] cursor-pointer' : 'bg-gray-300 cursor-not-allowed'}`}
                    disabled={!file}
                >
                    Upload and Encrypt
                </button>
            </div>
            <PrivacySection />
            <Footer />
        </div>
    );
};

export default UploadDNA;
