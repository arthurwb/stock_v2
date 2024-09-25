import React, { ReactNode, useMemo } from 'react';
import BorderedSection from './BorderedSection';

interface LoadingProps {
    label: string;
    children?: ReactNode;
    className?: string;
    message?: string
}

const Loading: React.FC<LoadingProps> = ({ label, className = "", message }) => {
    const loadingMessages = [
        "Building the executive terrain...",
        "Please wait a moment...",
        "Learning common traits...",
        "Loading daemons 1/21245...",
        "Panic...",
        "Selling personal data...",
        "Building nuro-replicant...",
        "Figuring out where the database is..."
    ];

    const randomMessage = useMemo(() => {
        const index = Math.floor(Math.random() * loadingMessages.length);
        return loadingMessages[index];
    }, []);

    return (
        <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${className}`}>
            <BorderedSection label={label} className='p-4' border='border-yellow'>
                <span className="text-white">{message || randomMessage}</span>
            </BorderedSection>
        </div>
    );
};

export default Loading;
