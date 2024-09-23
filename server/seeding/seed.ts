import { config } from 'dotenv';
config(); // Load environment variables from .env file

import { PrismaClient } from '@prisma/client';
import { Decimal } from '@keystone-6/core/types';

import { populateCarrots } from './populateCarrots'
import { populateHistoricalPrices } from './populateHP';

const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function seed() {
  // Clear existing data (optional, for testing)
  await prisma.tCarrots.deleteMany({});
  await prisma.tHistoricalPrices.deleteMany({});
  await prisma.tOptions.deleteMany({});
  await prisma.tUsers.deleteMany({});

  const hashedAdminPassword = await bcrypt.hash('admin123', 10);
  const hashedSamplePassword = await bcrypt.hash('password', 10);

  // Seed sample users
  const adminUser = await prisma.tUsers.create({
    data: {
      username: 'admin',
      password: hashedAdminPassword, // Make sure to hash this in a real scenario
      wallet: 100000.00,
    },
  });

  const sampleUser = await prisma.tUsers.create({
    data: {
      username: 'sample',
      password: hashedSamplePassword, // Hash this in a real scenario
      wallet: 0.00,
    },
  });

  // Seed sample options
  const googleOption = await prisma.tOptions.create({
    data: {
      optionName: 'google',
      price: 500,
    },
  });

  const microsoftOption = await prisma.tOptions.create({
    data: {
      optionName: 'microsoft',
      price: 500,
    },
  });

  const amazonOption = await prisma.tOptions.create({
    data: {
      optionName: 'amazon',
      price: 500,
    },
  });

  // Seed sample carrots
  const users = {
    admin: adminUser,
    sample: sampleUser
  };
  const options = {
    google: googleOption,
    microsoft: microsoftOption,
    amazon: amazonOption
  };
  populateCarrots(prisma, options, users);
  populateHistoricalPrices(prisma, options);

  console.log("Seeding completed!");
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
