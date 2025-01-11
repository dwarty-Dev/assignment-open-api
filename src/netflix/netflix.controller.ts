import { Controller, Get, Query } from '@nestjs/common';
import { NetflixService } from './netflix.service';

@Controller('netflix')  // this will make the base path '/netflix'
export class NetflixController {
  constructor(private readonly moviesService: NetflixService) {}

  @Get('movies')  // this sets the endpoint '/netflix/movies'
  async getMoviesByGenre(@Query('genre') genre: string) {
    if (!genre) {
      return {
        status: 400,
        message: 'Genre is required as a query parameter.',
      };
    }
    return this.moviesService.getMoviesByGenre(genre);
  }
}
