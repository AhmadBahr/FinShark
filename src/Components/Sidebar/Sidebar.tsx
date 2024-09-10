import React from 'react';

type Props = {};

const Sidebar: React.FC<Props> = (props: Props) => {
    return (
        <nav className="block py-4 px-6 top-0 bottom-0 w-64 bg-white shadow-xl left-0 fixed flex flex-col transition-transform duration-300 ease-in-out transform md:translate-x-0 translate-x-0">
            
            {/* Toggle Button for Mobile */}
            <button className="md:hidden flex items-center justify-center cursor-pointer text-blueGray-700 w-6 h-10 border border-solid border-blueGray-100 text-xl leading-none bg-white rounded-r absolute top-4 right-4 focus:outline-none z-50">
                <i className="fas fa-ellipsis-v"></i>
            </button>

            {/* Sidebar Content */}
            <div className="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto">
                <div className="flex flex-col items-stretch opacity-100 mt-4 h-auto z-40 items-center flex-1 rounded w-full">
                    <h6 className="text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                        Home
                    </h6>
                    {/* Add more links or content here */}
                    <ul className="w-full mt-4 space-y-2">
                        <li className="text-gray-700 hover:text-blue-500">
                            <a href="#section1">Section 1</a>
                        </li>
                        <li className="text-gray-700 hover:text-blue-500">
                            <a href="#section2">Section 2</a>
                        </li>
                        <li className="text-gray-700 hover:text-blue-500">
                            <a href="#section3">Section 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
