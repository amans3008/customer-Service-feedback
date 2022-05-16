import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
})
export class TicketFormComponent implements OnInit {
  ticketArray: any = [];
  updateTicket: any;
  public ticketForm: any;
  constructor(
    private router: Router,
    private httpService: HttpService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.updateTicket = this.httpService.editMode;
    this.initForm();
  }

  private initForm() {
    this.ticketForm = new FormGroup({
      subject: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  onSubmit(value: object) {
    if (this.httpService.editMode) {
      this.httpService.onUpdateTicket(value).subscribe((res: any) => {
        this.updateTicket = false;
        this.httpService.editMode = false;
        this.router.navigate(['showTicket']);
      });
    } else {
      this.httpService
        .addTicket(this.ticketForm.value)
        .subscribe((res: any) => {
          this.httpService.fetchTicket();
          this.router.navigate(['showTicket']);
        });
    }
  }
}
