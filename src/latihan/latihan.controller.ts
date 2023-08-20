import { Controller, Get } from '@nestjs/common';
import { LatihanService } from './latihan.service';


@Controller('latihan')
export class LatihanController {

    // constructor buat manggil si service
    constructor(private latihanService: LatihanService){}

     @Get()
    getLatihan() {
        return this.latihanService.getLatihan();
    } // hasil nya nilai return dari services
}
