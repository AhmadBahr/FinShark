import axios from 'axios';
import { CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from './company';

// Search companies based on query
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

// Get company profile by symbol
export const getCompanyProfile = async (symbol: string): Promise<CompanyProfile | string> => {
    try {
        const response = await axios.get<CompanyProfile[]>(
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

// Get key metrics based on query
export const getKeyMetrics = async (query: string): Promise<CompanyKeyMetrics | string> => {
    try {
        const response = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
            return response.data[0];
        } else {
            return "No key metrics found";
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching key metrics:", error.message);
            return `Error: ${error.message}`;
        } else {
            console.error("Unexpected error:", error);
            return "An unexpected error occurred";
        }
    }
};

// Get income statement based on query
export const getIncomeStatement = async (query: string): Promise<CompanyIncomeStatement[] | string> => {
    try {
        const response = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
            return response.data;
        } else {
            return "No income statement found";
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching income statement:", error.message);
            return `Error: ${error.message}`;
        } else {
            console.error("Unexpected error:", error);
            return "An unexpected error occurred";
        }
    }
};
