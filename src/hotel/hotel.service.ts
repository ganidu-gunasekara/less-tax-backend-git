import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class HotelService {
     private readonly hotelDataPath = path.join(process.cwd(),'data', 'hotel-offers.json');

  getAllOffers() {
    const data = fs.readFileSync(this.hotelDataPath, 'utf-8');
    return JSON.parse(data);
  }
}
