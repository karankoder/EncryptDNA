import { useState } from 'react';
import Footer from '../components/Footer';
import { FaTrashAlt } from 'react-icons/fa';
import { ethers } from 'ethers';
import { useConnectWallet } from '@web3-onboard/react';


const UploadDNA = () => {
    const [{ wallet }] = useConnectWallet();
    const [file, setFile] = useState(null);
    console.log(import.meta.env.VITE_APP_ALLERGIC_GENE);

    const geneCombinations = {
        "AA": 1,           // this is just an example, feeling sleepy so given an example data
        "AB": 2,
        "BA": 3,
        "BB": 4
    };
    // process of accessing the key value pair
    console.log(geneCombinations["AA"]);

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
                const contractAddress="0x07E8bD80C228CF5812E20Bfe8223485c53B0BD44";
                
                console.log('User Address:', userAddress);
                console.log('File content:', fileContent);
                

                const lines = fileContent.trim().split('\n');
                const dataLines = lines.filter(line => !line.startsWith('#'));
                const genotypeData = {};
                dataLines.forEach(line => {
                    const [rsid, , , genotype] = line.split('\t');
                    genotypeData[rsid] = genotype.trim();
                });

                const targetKeys = ["rs10811661", "rs1111875", "rs13266634", "rs1801282","rs1815739", "rs4402960", "rs5219", "rs6025","rs7754840", "rs7903146", "rs8050136", "rs9300039"];
                console.log('Target keys:', targetKeys);
                const ZamaData = {};
                // const provider = new ethers.providers.Web3Provider(window.ethereum);

                // // Request account access if needed
                // await provider.send("eth_requestAccounts", []);

                // // Get signer from MetaMask
                // const signer = provider.getSigner();

                // // Create FHEVM instance
                // const fhevmInstance = await createInstance(signer);
                // const input = instance.createEncryptedInput(contractAddress, userAddress);

                // targetKeys.forEach(key => {
                //     input.add256(geneCombinations[genotypeData[key]]) 
                // });
                // const inputs=await input.encrpyt();
                // targetKeys.forEach(key => {
                //     ZamaData[key]=inputs.handles[0];
                // });


                

                const finalJson = {
                    passport_id: "monadicdna_b65e442fcc0026ad8aeeb3ea6a779023_542916",
                    filename_hash: "b65e442fcc0026ad8aeeb3ea6a779023",
                    data_hash: "69f10259787f3305672bbedf52b7ddb4",
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

            <div className="h-[400px] bg-[#A8DADC] p-12 text-center">
                <div className="text-6xl mb-4">🔒</div>
                <h2 className="text-3xl font-semibold mb-4">Your Privacy is Our Priority</h2>
                <p className="text-lg mb-8">
                    Your genomic data is encrypted during upload and securely stored. Only
                    you have access to the results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h6 className="text-xl font-medium">Upload</h6>
                        <p className="text-gray-700">Your data is uploaded securely.</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-xl font-medium">Encrypt</h6>
                        <p className="text-gray-700">Your data is encrypted during the upload process.</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-xl font-medium">Insights</h6>
                        <p className="text-gray-700">Only you have access to the insights.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UploadDNA;
