import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('User API')
@Controller('user')
export class UserController {
  constructor() {}

  @Post('/create')
  @ApiOperation({ summary: 'Create a new user' })
  async create(): Promise<unknown> {
    return;
  }

  @Patch('/update/:username')
  async updateByUsername(): Promise<unknown> {
    return;
  }

  @Delete('/:username')
  async deleteByUsername(): Promise<unknown> {
    return;
  }

  @Get('/:username')
  @ApiOperation({ summary: 'Find user by username' })
  async getByUsername(): Promise<unknown> {
    return;
  }
}
