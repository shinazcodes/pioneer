import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RootObject } from './pages/data';


@Injectable()
export class GetjsonService implements OnInit{
  data: RootObject;
  course: RootObject;
  constructor(private http: Http) { }
  ngOnInit() {
  
}
public getCourseName(){
  this.http.get('./data/db.json').subscribe(res => {
  // this.data = res.json();
  this.course = <RootObject>res.json();
  console.log('TESTING ' + this.course);
  console.log('Test', this.course.courses);
});

return this.course;
}
}