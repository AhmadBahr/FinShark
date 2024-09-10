import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api.tsx'; 

interface Props {}

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

    return (
        <div>
            {loading && <div>Loading...</div>} 
            {error && <div className="error">Error: {error}</div>} 
            {company && !loading && (
                <div>
                    <h1>{company.companyName}</h1>
                    <p>{company.description}</p>
                </div>
            )}
            {!company && !loading && !error && (
                <div>Company not found</div>
            )}
        </div>
    );
};

export default Company;
