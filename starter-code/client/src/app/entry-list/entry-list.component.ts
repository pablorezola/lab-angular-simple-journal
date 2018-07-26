import { Component, OnInit } from '@angular/core';
import { entryService } from 'services/entryList.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  list: Array<object>

  constructor(private entryService: entryService) { }

  ngOnInit() {
    this.entryService.getList().subscribe((res) =>{
      this.list = res.map(e=>{
        return {title: e.title, date: e.date, id: e._id}
      })
    })
  }

}
