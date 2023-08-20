import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Ayana!';
  }

  getHello2(): string {
    return 'Hello Mona!';
  }
}
