import { initBaseAuth } from '@propelauth/node';
import { env } from '~/env.mjs';

export const propelauth = initBaseAuth({
  authUrl: env.NEXT_PUBLIC_AUTH_URL,
  apiKey: env.PROPELAUTH_API_KEY,
  manualTokenVerificationMetadata: {
    verifierKey: env.PROPELAUTH_VERIFIER_KEY,
    issuer: env.NEXT_PUBLIC_AUTH_URL,
  },
});
