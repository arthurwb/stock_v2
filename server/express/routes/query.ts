import type { Context } from ".keystone/types";
// import cors from "cors";
import type { Express } from "express";
import express from "express";
import { json } from "express";
import { PrismaClient } from '@prisma/client';

import { OptionByName } from "../requestDefs";
import { isConstructorDeclaration } from "typescript";

const prisma = new PrismaClient();

const query = {
    getOptions: async (req: string) => {
        if (req) {;
            const option = await prisma.tOptions.findFirst({
                where: {
                    optionName: req
                }
            });
            return option;
        }
    }
}

export default query;