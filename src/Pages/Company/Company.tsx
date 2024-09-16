import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api.tsx';
import Sidebar from '../../Components/Sidebar/Sidebar.tsx';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard.tsx';
import Tile from '../../Components/Tile/Tile.tsx';

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
                    setCompany(null);
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
        <div className="flex">
            <aside className="w-64 bg-gray-800 text-white p-4">
                <Sidebar />
            </aside>
            <main className="flex-1 p-4">
                {error && <div className="mb-4 p-4 bg-red-100 text-red-800 border border-red-300 rounded-md">
                    Error: {error}
                </div>}
                {company ? (
                    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                        <Sidebar />
                        <CompanyDashboard>
                            <Tile title='Company Name' subTitle={company.companyName}></Tile>
                            </CompanyDashboard>
                    </div>
                ) : !error && (
                    <div className="text-center text-gray-600">
                        <div>Company Not Found</div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Company;
