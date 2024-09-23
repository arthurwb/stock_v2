import type { Context } from ".keystone/types";
// import cors from "cors";
import type { Express } from "express";
import { json } from "express";

export async function extendExpressApp(app: Express, context: Context) {
    app.get("/status", (_, res) => res.send("Ready"));
}