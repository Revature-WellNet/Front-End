import { Component, OnInit } from '@angular/core';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  constructor(private nurse: NurseService) { }

  ngOnInit(): void {
  }

  getInfo(){
    this.nurse.getUserInfo();
  }

}
