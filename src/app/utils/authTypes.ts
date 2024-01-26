import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { OAuthConfig } from 'next-auth/providers';
import { EmailConfig } from 'next-auth/providers/email';

export interface MyAuthOptions extends NextAuthOptions {
  adapter: PrismaAdapter;
  providers: (OAuthConfig<any> | EmailConfig)[];
  secret: string | undefined;
}
