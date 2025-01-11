import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NetflixService {
  private readonly baseUrl = 'https://netflix-api10.p.rapidapi.com/api';

  // Existing method to fetch movies by genre
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
        'Failed to fetch movies by genre',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // New method to fetch categories
  async getCategories() {
    try {
      const response = await axios.get(`${this.baseUrl}/categories`, {
        headers: {
          'X-Rapidapi-Key': 'f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026',
          'X-Rapidapi-Host': 'netflix-api10.p.rapidapi.com',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error.response?.data || error.message);
      throw new HttpException(
        'Failed to fetch categories',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
