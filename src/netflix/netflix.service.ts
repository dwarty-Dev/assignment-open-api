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

      return {
        status: 200,
        message: `Successfully fetched movies for genre: ${genre}. Enjoy your binge! 🎉`,
        data: response.data,
      };
    } catch (error) {
      console.error('Error fetching movies by genre:', error.response?.data || error.message);

      throw new HttpException(
        {
          status: error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.response?.data?.message || 'Failed to fetch movies by genre. Please try again later!',
          details: error.response?.data || null,
        },
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // New method to fetch categories with customized response
  async getCategories() {
    try {
      const response = await axios.get(`${this.baseUrl}/categories`, {
        headers: {
          'X-Rapidapi-Key': 'f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026',
          'X-Rapidapi-Host': 'netflix-api10.p.rapidapi.com',
        },
      });

      return {
        status: 200,
        message: 'Successfully fetched all categories. Find your favorite genre and dive in! 🎭📚',
        data: response.data,
      };
    } catch (error) {
      console.error('Error fetching categories:', error.response?.data || error.message);

      throw new HttpException(
        {
          status: error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.response?.data?.message || 'Failed 
