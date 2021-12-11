import { Course } from './../../courses/models/course';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private hhtpClient:HttpClient) { }

  list(): Course[] {
    return [
      {_id: '1', name:'Angular', category:'front-end'}
    ];
  }
}
