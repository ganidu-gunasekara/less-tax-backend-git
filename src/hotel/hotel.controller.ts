import { Controller, Get, Query } from '@nestjs/common';
import { HotelService } from './hotel.service';

@Controller('hotel')
export class HotelController {
    constructor(private readonly hotelService: HotelService) {}

  @Get()
  getHotels(@Query('location') location?: string) {
    return this.hotelService.getFilteredHotels(location);
  }
}
