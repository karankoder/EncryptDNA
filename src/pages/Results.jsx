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
            reader.onload = (e) => {
                const fileContent = e.target?.result;
                console.log('File content:', fileContent);
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
