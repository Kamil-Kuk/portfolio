import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../service/posts.service';
import {AboutService} from '../../service/about.service';
import {Employee} from '../../model/employee.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public employees: Employee[] = [];
  constructor(
    private aboutService: AboutService
  ) { }

  ngOnInit(): void {
    this.aboutService.getAboutInfo().subscribe((users) => {
      this.employees = users;
    });
  }

}
