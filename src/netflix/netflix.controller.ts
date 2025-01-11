import { Controller, Get, Query } from '@nestjs/common';
import { NetflixService } from './netflix.service';

@Controller('netflix')  // this will make the base path '/netflix'
export class NetflixController {
  constructor(private readonly moviesService: NetflixService) {}

  // Existing route to fetch movies by genre
  @Get('movies')
  async getMoviesByGenre(@Query('genre') genre: string) {
    if (!genre) {
      return {
        status: 400,
        message: 'Genre is required as a query parameter.',
      };
    }
    return this.moviesService.getMoviesByGenre(genre);
  }

  // New route to fetch categories
  @Get('categories')
  async getCategories() {
    try {
      return await this.moviesService.getCategories();
    } catch (error) {
      return {
        status: 500,
        message: 'Failed to fetch categories',
      };
    }
  }
}
