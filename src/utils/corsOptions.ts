import { ApolloError } from 'apollo-server-core';

const whitelistedUrls = process.env.CLIENTS_URLS?.split(',') || [];

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, check?: boolean) => Error | void
  ): void | Error => {
    if (process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    if (whitelistedUrls.indexOf(origin as string) !== -1) {
      return callback(null, true);
    }
    return callback(new ApolloError('Not allowed by CORS'), false);
  },
  credentials: true,
};

export default corsOptions;
