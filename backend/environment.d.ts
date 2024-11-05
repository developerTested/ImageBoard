import { userType } from "./src/models/user";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT: string;
            HOST_NAME: string;
            ORIGIN_HOSTS: string;
            ACCESS_TOKEN_SECRET: string;
            REFRESH_TOKEN_SECRET: string;
            ACCESS_TOKEN_EXPIRY: string;
            REFRESH_TOKEN_EXPIRY: string;
            CLOUDINARY_CLOUD_NAME: string;
            CLOUDINARY_API_KEY: string;
            CLOUDINARY_API_SECRET: string;
            MONGODB_URL: string,
        }
    }
}


declare module 'express' {
    interface Request {
        currentUser?: userType;
    }
}

export { }