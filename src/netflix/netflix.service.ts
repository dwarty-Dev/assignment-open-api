import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NetflixService {
  private readonly baseUrl = 'https://netflix-api10.p.rapidapi.com/api';

  async getMoviesByGenre(genre: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/movies`, {
        headers: {
          'X-Rapidapi-Key': 'f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026',
          'X-Rapidapi-Host': 'netflix-api10.p.rapidapi.com',
        },
        params: { genre },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching movies by genre:', error.response?.data || error.message);
      throw new HttpException(
        error.response?.data?.message || 'Failed to fetch movies by genre',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  
}
