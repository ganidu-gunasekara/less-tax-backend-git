import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class HotelService {
     private readonly hotelDataPath = path.join(process.cwd(),'data', 'hotel-offers.json');

  getFilteredHotels(location?: string) {
    const raw = fs.readFileSync(this.hotelDataPath, 'utf-8');
    const hotels = JSON.parse(raw);

    if (!location) return hotels;

    return hotels.filter((hotel: any) =>
      hotel.location.toLowerCase() === location.toLowerCase()
    );
  }
}
