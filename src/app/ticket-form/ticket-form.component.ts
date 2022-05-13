import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HTTPSERVICE } from '../app.http.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  constructor(private router: Router,
    private httpService: HTTPSERVICE,
    private http: HttpClient
    ) {}

  ngOnInit(): void {
    this.updateTicket = this.httpService.editMode;
  }

  ticketArray:any  = [];
  updateTicket:any;
  ticketForm = new FormGroup({
    'subject': new FormControl(null,Validators.required),
    'description': new FormControl(null, Validators.required)
  });

  onSubmit(value: object)
  {
    if(this.httpService.editMode)
    {
      this.httpService.onUpdateTicket(value)
      .subscribe((res)=>{
      this.updateTicket = false;
      this.httpService.editMode = false;
        this.router.navigate(['showTicket']);
      });
    }
    else
    {
      this.httpService.addTicket(this.ticketForm.value)
    .subscribe((res:any)=>{
      this.httpService.fetchData();
    this.router.navigate(['showTicket']);
    })
    }
  }

}
