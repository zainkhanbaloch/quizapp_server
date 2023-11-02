import { lucia } from "lucia";
import { express } from "lucia/middleware";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const auth = lucia({
	env: "DEV", // "PROD" if deployed to HTTPS
	middleware: express(),
	adapter: prisma(client)
});

export type Auth = typeof auth;