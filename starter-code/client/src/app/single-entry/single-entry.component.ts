import { Component, OnInit } from '@angular/core';
import { entryService } from 'services/entryList.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router'

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry: Object
  constructor(private entryService: entryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      this.entryService.getEntry(params.id)
      .subscribe( res => {
        this.entry = res
      })
    })
  }

}
