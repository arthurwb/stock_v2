import type { Context } from ".keystone/types";
import type { Express } from "express";
import express from "express";
import fetch from "node-fetch"; // Ensure you have this if you're using fetch in Node.js
import query from "./routes/query";

export async function extendExpressApp(app: Express, context: Context) {
    app.use(express.json());
    
    app.get("/status", (_, res) => res.send("Ready"));

    // Dog route that does not require authentication
    app.get("/dog", async (_, res) => {
        try {
            console.log("Fetching dog image...");
            const dogResponse = await fetch('https://dog.ceo/api/breeds/image/random');
            if (!dogResponse.ok) {
                return res.status(dogResponse.status).send('Failed to fetch dog image');
            }
            const dogData = await dogResponse.json();
            res.send(dogData);
        } catch (error) {
            console.error('Error fetching dog image:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    // Query route that requires authentication
    app.post("/query", async (req, res) => {
        // Assuming this route requires authentication
        const result = await query.getOptions(req.body.optionName);
        res.send(result);
    });
}
