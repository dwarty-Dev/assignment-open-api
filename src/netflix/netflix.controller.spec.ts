import { Test, TestingModule } from '@nestjs/testing';
import { NetflixController } from './netflix.controller';

describe('NetflixController', () => {
  let controller: NetflixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetflixController],
    }).compile();

    controller = module.get<NetflixController>(NetflixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
