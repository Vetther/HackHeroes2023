import { SetMetadata } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

console.log(process.env.DEV_MODE);
export const DevApiTags = (...tags: string[]) =>
  SetMetadata('dev', process.env.DEV_MODE === 'true' ? tags : []);
