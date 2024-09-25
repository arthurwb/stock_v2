import React, { ReactNode, useMemo } from 'react';
import BorderedSection from './BorderedSection';

interface WarningProps {
    message: string;
    children?: ReactNode;
    className?: string;
}

const Warning: React.FC<WarningProps> = ({ message, children, className = "" }) => {
    return (
        <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${className}`}>
            <BorderedSection label='warning' className='p-4'>
                <span className="text-white">{message}</span>
                {children}
            </BorderedSection>
        </div>
    );
};

export default Warning;
