import { SetMetadata } from '@nestjs/common';

export const DevApiTags = (...tags: string[]) =>
  SetMetadata('dev', process.env.DEV_MODE === 'true' ? tags : []);
