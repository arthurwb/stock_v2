import React from "react";

import Image from "next/image";

import Warning from "@/components/Warning";

type UtilityCommandResponse = React.ReactNode | null;

const utilityCommands = {
    clear: (): UtilityCommandResponse => {
        // TODO: add more details for clearing. pop-ups, display text, etc.
        return null;
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

            console.log(dogURL);

            return (
                <Warning message={"dog"}>
                    <Image src={dogURL} alt="Random Dog" width={500} height={500}/>
                </Warning>
            );
        } catch (error) {
            console.error('Fetch error:', error);
            return <Warning message={`Error fetching dog image: ${error instanceof Error ? error.message : 'Unknown error'}`}></Warning>;
        }
    }
};

export default utilityCommands;
