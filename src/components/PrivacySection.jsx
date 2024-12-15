import React from 'react'

export default function PrivacySection() {
    return (
        <div className="h-auto bg-[#a8dadc] p-12 text-center rounded-lg shadow-lg">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-4xl font-bold mb-4 text-black">Your Privacy is Our Priority</h2>
            <p className="text-lg mb-8 text-black-200">
                Your genomic data is encrypted during upload and securely stored. Only
                you have access to the results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-white p-6 rounded-lg shadow-md">
                    <h6 className="text-2xl font-semibold mb-2">Upload</h6>
                    <p className="text-gray-700">Your data is uploaded securely.</p>
                </div>
                <div className="text-center bg-white p-6 rounded-lg shadow-md">
                    <h6 className="text-2xl font-semibold mb-2">Encrypt</h6>
                    <p className="text-gray-700">Your data is encrypted during the upload process.</p>
                </div>
                <div className="text-center bg-white p-6 rounded-lg shadow-md">
                    <h6 className="text-2xl font-semibold mb-2">Insights</h6>
                    <p className="text-gray-700">Only you have access to the insights.</p>
                </div>
            </div>
        </div>
    )
}
