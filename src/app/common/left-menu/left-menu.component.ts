import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { GetjsonService } from '../../getjson.service';
import { CoursesItem, RootObject, TopicsItem } from '../../pages/data';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  courses: CoursesItem[];
  coursename: string;

  constructor(private getjson: GetjsonService, private http: Http, private route: ActivatedRoute, 
    private router: Router) { }
  ngOnInit() {
  this.route.params.subscribe((params: Params) => this.coursename = params['id']);
    this.http.get('./data/db.json').subscribe(res => {
      // this.data = res.json();
      this.courses = <CoursesItem[]>res.json().courses;
  });
    // this.courses = this.getjson.getCourseName();
}
  // play(course) {
  //   const url = course.name;
  //   this.router.navigate([url], { relativeTo: this.route });
  //   console.log('courses testing:'+ course.name);
  // }
}