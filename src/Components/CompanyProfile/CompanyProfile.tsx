import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyKeyMetrics } from "../../company";
import { getKeyMetrics } from "../../api.tsx";
import RatioList from "../RatioList/RatioList.tsx";
import Spinner from "../Spinner/Spinner.tsx";

type Props = {};

const tableConfig = [
    {
        label: "Market Cap",
        render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    },
    {
        label: "Current Ratio",
        render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
    },
    {
        label: "Return On Equity",
        render: (company: CompanyKeyMetrics) => company.roeTTM,
    },
    {
        label: "Cash Per Share",
        render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
    },
];

const CompanyProfile = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<CompanyKeyMetrics | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCompanyKeyMetrics = async () => {
            try {
                setLoading(true);
                const result = await getKeyMetrics(ticker);
                if (result && typeof result !== "string") {
                    setCompanyData(result);
                } else {
                    setError(result as string);
                }
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchCompanyKeyMetrics();
    }, [ticker]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            {companyData ? (
                <RatioList data={companyData} config={tableConfig} />
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default CompanyProfile;
