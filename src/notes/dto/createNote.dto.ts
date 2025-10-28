import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateNoteDto {
 @ApiProperty({
    description: 'The title of the note',
    required: true,
 })
 @IsString({message: 'title is required'})
 @MinLength(1, {message: 'title must be at least 1 character'})
 title: string;

 @ApiProperty({
    description: 'The content of the note',
    required: true,
 })
 @IsString({message: 'content is required'})
 @MinLength(5, {message: 'content must be at least 1 character'})
 content: string;
}