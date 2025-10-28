import { Injectable, NotFoundException } from '@nestjs/common';
import type { Note } from './types/notes';
import { CreateNoteDto } from './dto/createNote.dto';
import { UpdateNoteDto } from './dto/updateNote.dto';

@Injectable()
export class NotesService {
    private notes: Note[] = []
    private id = 1

    getAllNotes(): Note[] {
        return this.notes;
    }

    getNoteById(id: Number): Note {
        const note = this.notes.find((n) => n.id === id);
        if (!note) throw new NotFoundException('Note not found');
        return note;
    }

    createNote(createNoteDto: CreateNoteDto){
        if (!createNoteDto.title || !createNoteDto.content) throw new NotFoundException('Note title and content are required');

        const newNote: Note = {
            id: this.id++,
            title: createNoteDto.title,
            content: createNoteDto.content,
            createdAt: new Date()
        }

        this.notes.push(newNote);
        return newNote;
    }  
    
    updateNote(id:Number, updateNoteDto:UpdateNoteDto){
        const note = this.getNoteById(id);
        if (!note) throw new NotFoundException('Note not found');
        Object.assign(note, updateNoteDto);
        return note;
    }

    deleteNote(id:Number){
        const noteIndex = this.notes.findIndex((n) => n.id === id);
        if (noteIndex === -1) throw new NotFoundException('Note not found');
        return this.notes.splice(noteIndex, 1);
    }
    
}

