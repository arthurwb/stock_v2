import type { Context } from ".keystone/types";
import type { Express } from "express";
import express from "express";
import fetch from "node-fetch"; // Ensure you have this if you're using fetch in Node.js
import query from "./routes/query";
import runner from "./excRunner";

export async function extendExpressApp(app: Express, context: Context) {
    app.use(express.json());

    runner();
    
    app.get("/status", (_, res) => res.send("Ready"));
    app.get("/dog", async (_, res) => {
        try {
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

    app.post("/query", async (req, res) => {
        const result = await query(req.body.type);
        res.send(result);
    });
}
