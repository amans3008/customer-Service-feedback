import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../service/http.service';
import { map, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css'],
})
export class ShowTicketComponent implements OnInit {
  ticketsArray: any = [];

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTicketData();
  }

  onDelete(user: any, index: any) {
    this.httpService.onDeleteTickets(user, index).subscribe(() => {
      this.httpService
        .fetchTicket()
        .pipe(
          map((responseData: any) => {
            return this.formatState(responseData);
          })
        )
        .subscribe((tickets: any) => {
          this.ticketsArray = tickets;
        });
    });
  }

  fetchTicketData() {
    this.httpService
      .fetchTicket()
      .pipe(
        map((responseData: any) => {
          return this.formatState(responseData);
        })
      )
      .subscribe((tickets: any) => {
        this.ticketsArray = tickets;
      });
  }

  onUpdate(ticket: any, index: any) {
    this.httpService.editMode = true;
    this.httpService.ticket = ticket;
    this.router.navigate(['ticketForm']);
  }

  onFeedback(ticket: any, index: any) {
    this.httpService.feedbackTicket = this.ticketsArray[index];
    this.router.navigate(['feedback']);
  }

  formatState(body: object) {
    let stateArray = [];
    if (body) {
      for (const [key, value] of Object.entries(body)) {
        stateArray.push({
          Key: key,
          Value: value,
        });
      }
    }
    return stateArray;
  }
}
