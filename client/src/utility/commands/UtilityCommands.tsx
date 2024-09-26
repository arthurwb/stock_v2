import React from "react";

import Image from "next/image";

import Warning from "@/components/Warning";
import { red } from "@mui/material/colors";

type UtilityCommandResponse = React.ReactNode | null;

const utilityCommands = {
    clear: (): UtilityCommandResponse => {
        // TODO: add more details for clearing. pop-ups, display text, etc.
        return null;
    },
    help: () => {
        return (
            <div className="flex flex-row">
                <div className="row" style={{marginRight: 100}}>
                    <h1 style={{ color: "red"}}>Utility Commands</h1>
                    <div className="m-4">
                        <p>clear | c</p>
                        <p>help | --help | -h</p>
                        <p>dog</p>
                    </div>
                    <h1 style={{ color: "red" }}>Option Commands</h1>
                    <p>get options</p>
                </div>
                <div className="row">
                    <br />
                    <p>clear terminal</p>
                    <p>show list of commands</p>
                    <p>dog</p>
                    <br />
                    <p>get list of users bought options</p>
                </div>
            </div>
        )
    },
    dog: async (): Promise<UtilityCommandResponse> => {
        try {
            const response = await fetch('http://localhost:8080/dog', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const dogURL: string = data.message;

            return (
                <Warning message={"dog"}>
                    <Image src={dogURL} alt="Random Dog" width={500} height={500} style={{ width: 'auto', height: 350 }}/>
                </Warning>
            );
        } catch (error) {
            console.error('Fetch error:', error);
            return <Warning message={`Error fetching dog image: ${error instanceof Error ? error.message : 'Unknown error'}`}></Warning>;
        }
    }
};

export default utilityCommands;
