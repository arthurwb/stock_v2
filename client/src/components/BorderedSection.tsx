import React, { useState, useEffect, ReactNode } from 'react';

interface BorderedSectionProps {
    label: string;
    children: ReactNode;
    className?: string;
    border?: string;
}

const BorderedSection: React.FC<BorderedSectionProps> = ({ label, children, className = "", border = "border-white" }) => {
    return (
        <div className={`relative border-solid ${border} border-1 p-2 pt-4 bg-black ${className}`}>
            <span className="absolute top-[-10px] left-2 bg-black text-white px-1">{label}</span>
            {children}
        </div>
    );
};

export default BorderedSection