import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api.tsx';

interface Props { }

const Company: React.FC<Props> = (props: Props) => {
    const { ticker } = useParams<{ ticker: string }>();
    const [company, setCompany] = useState<CompanyProfile | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            setError(null);

            if (ticker) {
                const result = await getCompanyProfile(ticker);
                if (typeof result === 'string') {
                    setError(result);
                    setCompany(null); // Ensure company is null when there is an error
                } else {
                    setCompany(result);
                }
            } else {
                setError("Ticker is not provided");
            }

            setLoading(false);
        };

        fetchProfile();
    }, [ticker]);

    if (loading) return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <div className="animate-spin h-12 w-12 border-4 border-t-4 border-gray-500 border-opacity-50 rounded-full"></div>
                <p className="mt-4 text-gray-600">Loading...</p>
            </div>
        </div>
    );

    return (
        <div className="p-4 max-w-4xl mx-auto">
            {error && <div className="mb-4 p-4 bg-red-100 text-red-800 border border-red-300 rounded-md">
                Error: {error}
            </div>}
            {company ? (
                <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                    <h1 className="text-2xl font-bold mb-2">{company.companyName}</h1>
                    <p><strong className="font-semibold">Symbol:</strong> {company.symbol}</p>
                    <p><strong className="font-semibold">Description:</strong> {company.description}</p>
                    <p><strong className="font-semibold">Industry:</strong> {company.industry}</p>
                    <p><strong className="font-semibold">Address:</strong> {company.address}</p>
                    <p><strong className="font-semibold">Stock Price:</strong> ${company.price}</p>
                </div>
            ) : !error && (
                <div className="text-center text-gray-600">
                    Company not found
                </div>
            )}
        </div>
    );
};

export default Company;
