declare global {
    namespace Express {
        interface Request {
            rawBody: Buffer;
        }

        interface Response {
            sendJson(data: unknown): this;
        }
    }
}

export {};
