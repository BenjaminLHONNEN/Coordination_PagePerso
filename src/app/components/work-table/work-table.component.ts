import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-work-table',
  templateUrl: './work-table.component.html',
  styleUrls: ['./work-table.component.scss']
})
export class WorkTableComponent implements OnInit {

  projet;

  constructor(private projectService: ProjectService) {
    projectService.list().subscribe(data => {
      console.log(data);
      this.projet = data;
    });
  }

  ngOnInit() {
  }

}
