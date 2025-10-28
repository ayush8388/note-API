import { Controller, Get, Param, Post, Put, Delete, Body, ParseIntPipe } from '@nestjs/common';
import { UpdateNoteDto } from './dto/updateNote.dto';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/createNote.dto';
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}
    @Get()
    @ApiResponse({status:200, description:'All notes fetched successfully'})
    @ApiResponse({status:400, description:'Bad request'})
    getAllNotes(){
        const data = this.notesService.getAllNotes();
        return {status:200, message:'data fetched', data};
        
    }

    @Get(':id')
    @ApiResponse({status:200, description:'Note fetched successfully'})
    @ApiResponse({status:400, description:'Bad request'})
    getNoteById(@Param('id', ParseIntPipe) id: Number){
        const data = this.notesService.getNoteById(id);
        return {status:200, message:'data fetched', data};
    }

    @Post()
    @ApiResponse({status:400, description:'Bad request'})
    @ApiResponse({status:201, description:'Note created successfully'})
    @ApiCreatedResponse({description:'Note created successfully', type:CreateNoteDto})
    createNote(@Body() createNoteDto: CreateNoteDto){
        const data = this.notesService.createNote(createNoteDto);
        return {status:201, message:'data created', data};
    }

    @Put(':id')
    @ApiResponse({status:200, description:'Note updated successfully'})
    @ApiResponse({status:400, description:'Bad request'})
    updateNote(@Param('id', ParseIntPipe) id: Number, @Body() updateNoteDto: UpdateNoteDto){
        const data = this.notesService.updateNote(id, updateNoteDto);
        return {status:200, message:'data updated', data};
    }

    @Delete(':id')
    @ApiResponse({status:200, description:'Note deleted successfully'}) 
    @ApiResponse({status:400, description:'Bad request'})
    deleteNote(@Param('id', ParseIntPipe) id: Number){
        const data = this.notesService.deleteNote(id);
        return {status:200, message:'data deleted', data};
    }       
}
