import axios from 'axios';
import { CompanyBalanceSheet, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyCompData } from './company';

export const searchCompanies = async (query: string): Promise<CompanySearch[] | string> => {
    try {
        const response = await axios.get<CompanySearch[]>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=40&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
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

export const getKeyMetrics = async (symbol: string): Promise<CompanyKeyMetrics | string> => {
    try {
        const response = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${symbol}?apikey=${process.env.REACT_APP_API_KEY}`
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

export const getIncomeStatement = async (symbol: string): Promise<CompanyIncomeStatement[] | string> => {
    try {
        const response = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${symbol}?apikey=${process.env.REACT_APP_API_KEY}`
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

export const getBalanceSheet = async (symbol: string): Promise<CompanyBalanceSheet[] | string> => {
    try {
        const response = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${symbol}?apikey=${process.env.REACT_APP_API_KEY}`
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
            return response.data;
        } else {
            return "No balance sheet found";
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching balance sheet:", error.message);
            return `Error: ${error.message}`;
        } else {
            console.error("Unexpected error:", error);
            return "An unexpected error occurred";
        }
    }
};

export const getCashflow = async (symbol: string): Promise<CompanyBalanceSheet[] | string> => {
    try {
        const response = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${symbol}?apikey=${process.env.REACT_APP_API_KEY}`
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
            return response.data;
        } else {
            return "No balance sheet found";
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error fetching balance sheet:", error.message);
            return `Error: ${error.message}`;
        } else {
            console.error("Unexpected error:", error);
            return "An unexpected error occurred";
        }
    }
};

export const getCompData = async (query: string) => {
    try {
        const data = await axios.get<CompanyCompData[]>(
            `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};
