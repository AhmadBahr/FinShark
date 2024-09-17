import axios from 'axios';
import { CompanyKeyMetrics, CompanyProfile, CompanySearch } from './company';

export const searchCompanies = async (query: string): Promise<CompanySearch[] | string> => {
    try {
        const response = await axios.get<CompanySearch[]>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        );

        if (Array.isArray(response.data)) {
            return response.data;
        } else {
            return "No results found";
        }

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error message from API:', error.message);
            return `Error: ${error.message}`;
        } else {
            console.error('Unexpected error:', error);
            return "An unexpected error occurred";
        }
    }
};

export const getCompanyProfile = async (symbol: string): Promise<CompanyProfile | string> => {
    try {
        const response = await axios.get<CompanyProfile>(
            `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${process.env.REACT_APP_API_KEY}`
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
            return response.data[0];
        } else {
            return "No profile found";
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching company profile:", error.message);
            return `Error: ${error.message}`;
        } else {
            console.error("Unexpected error:", error);
            return "An unexpected error occurred";
        }
    }
};

export const getKeyMetrics = async (query: string) => {
    try {
        const response = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
            return response.data[0];
        } else {
            return "No profile found";
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching company profile:", error.message);
            return `Error: ${error.message}`;
        } else {
            console.error("Unexpected error:", error);
            return "An unexpected error occurred";
        }
    }
};