import { Injectable } from '@nestjs/common';

@Injectable()
export class LatihanService {

    getLatihan(){
        return {
            pesan: 'Latihan Pakai Service'
        } // return dengan json
    }


}
