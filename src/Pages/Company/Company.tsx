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
        <div className="loading">
            <div className="spinner"></div> {/* Example spinner */}
            <p>Loading...</p>
        </div>
    );

    return (
        <div>
            {error && <div className="error">Error: {error}</div>}
            {company && (
                <div className="company-details">
                    <h1>{company.companyName}</h1>
                    <p><strong>Symbol:</strong> {company.symbol}</p>
                    <p><strong>Description:</strong> {company.description}</p>
                    <p><strong>Industry:</strong> {company.industry}</p>
                    <p><strong>Address:</strong> {company.address}</p>
                    <p><strong>Stock Price:</strong> ${company.price}</p>
                </div>
            )}
            {!company && !error && (
                <div className="no-result">
                    Company not found
                </div>
            )}
        </div>
    );
};

export default Company;
