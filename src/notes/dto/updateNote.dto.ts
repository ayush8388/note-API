import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class UpdateNoteDto {
 @ApiProperty()
 @Optional()
 @IsString({message: 'title is required'})
 title?: string;

 @ApiProperty()
 @Optional()
 @IsString({message: 'content is required'})
 content?: string;
}