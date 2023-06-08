import { type GetServerSidePropsContext } from 'next';
import { propelauth } from '~/server/propelauth';

export const getServerAuthSessionPA = (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => {
  return propelauth.validateAccessTokenAndGetUser(ctx.req.headers.authorization);
};
