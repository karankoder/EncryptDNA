import { useState } from 'react';
import Footer from '../components/Footer';
import { FaTrashAlt } from 'react-icons/fa';

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

export default Results;
