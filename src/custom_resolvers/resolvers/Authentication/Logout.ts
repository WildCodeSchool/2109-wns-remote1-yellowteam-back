import { Ctx, Mutation, Resolver } from 'type-graphql';
import Cookies from 'cookies';
import { GQLContext } from 'src/interfaces';

@Resolver()
export class LogoutResolver {
  @Mutation(() => String)
  async logout(@Ctx() ctx: GQLContext): Promise<string> {
    const cookies = new Cookies(ctx.req, ctx.res, {
      secure: process.env.NODE_ENV === 'production',
    });
    cookies.set('token', '', {
      httpOnly: process.env.NODE_ENV === 'production',
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    });
    return 'User successfully logged out';
  }
}
