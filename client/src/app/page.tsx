// pages/get.tsx
'use client';

import React, { useState } from "react";
import TerminalInput from "@/components/TerminalInput";
import BorderedSection from "@/components/BorderedSection";

export default function Home() {
    const [commandOutput, setCommandOutput] = useState<React.ReactNode>(null);

    // Function to handle the output from TerminalInput
    const handleCommandOutput = (output: React.ReactNode) => {
        setCommandOutput(output);
    };

    return (
        <main>
            <div className="relative flex flex-col px-4 w-screen h-screen bg-black">
                <div className="flex flex-row basis-2/12 p-2">
                    <div className="basis-5/12 m-2"></div>
                    <BorderedSection label="Section 1" className="basis-2/12 m-2">
                        image
                    </BorderedSection>
                    <div className="flex flex-col basis-5/12 m-2">
                        <div className="flex flex-row basis-6/12">
                            <div className="basis-6/12"></div>
                            <BorderedSection label="Section 2" className="basis-6/12">
                                user data
                            </BorderedSection>
                        </div>
                        <div className="basis-6/12"></div>
                    </div>
                </div>
                <div className="flex flex-col basis-10/12 px-2 pt-3 border-green border-x-1 border-t-1 border-solid">
                    {/* Render the command output */}
                    <div className="flex-1 overflow-auto">{commandOutput}</div>
                    <TerminalInput onCommandOutput={handleCommandOutput} />
                </div>
            </div>
        </main>
    );
}
