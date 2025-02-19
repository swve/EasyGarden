import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommunityService } from './community.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { FindCommunitiesDTO } from './dto/find-communities.dto';
import { FindCommunityAdressDTO } from './dto/find-adress.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';

@ApiTags('Communauté')
@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Post()
  create(@Body() createCommunityDto: CreateCommunityDto) {
    return this.communityService.create(createCommunityDto);
  }

  @Get('findCommunities')
  findCommunities(@Body() findCommunitiesDTO: FindCommunitiesDTO) {
    return this.communityService.findCommunities(findCommunitiesDTO);
  }

  @Get('findCommunitiesReduced')
  findCommunitiesReduced(@Body() findCommunitiesDTO: FindCommunitiesDTO) {
    return this.communityService.findCommunitiesReduced(findCommunitiesDTO);
  }

  @Get('findCommunitiesByAdress')
  findCommunitiesByAdress(@Body() findCommunityAdressDTO: FindCommunityAdressDTO) {
    return this.communityService.findCommunitiesByAdress(findCommunityAdressDTO);
  }

  @Get()
  findAll() {
    return this.communityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.communityService.findOne(id);
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommunityDto: UpdateCommunityDto) {
    return this.communityService.update(id, updateCommunityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.communityService.remove(id);
  }
}
