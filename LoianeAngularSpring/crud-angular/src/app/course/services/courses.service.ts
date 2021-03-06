import { Course } from './../../courses/models/course';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { delay, first, take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private hhtpClient:HttpClient) { }

  list() {
    return this.hhtpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
