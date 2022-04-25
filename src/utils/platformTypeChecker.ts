/* eslint-disable consistent-return */
import { Request } from 'express';

const platformTypeChecker = (req: Request): 'mobile' | 'web' | 'undefined' => {
  if (req.headers['platform-auth-user-agent'] === 'mobile-platform')
    return 'mobile';
  if (req.headers['platform-auth-user-agent'] === 'web-platform') return 'web';

  return 'undefined';
};

export default platformTypeChecker;
