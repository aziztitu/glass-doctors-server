export enum ServerMode {
    dev = 'dev',
    prod = 'prod',
}

export default {
    mode: process.env.MODE as ServerMode,
    http: {
        port: +process.env.HTTP_PORT!,
    },
    mongo: {
        host: process.env.MONGO_HOST,
        port: +process.env.MONGO_PORT!,
        db: process.env.MONGO_DB,

        passwordHash: {
            saltingRounds: 10,
        },
    },
};
