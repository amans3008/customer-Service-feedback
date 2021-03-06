import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  feedbackTicket: any;
  editMode: boolean = false;
  ticket: any;

  private _baseUrl = env.base_url;

  constructor(private http: HttpClient) {}

  addTicket(value: object) {
    return this.http.post(`${this._baseUrl}.json`, value);
  }

  onFeedback(value: object) {
    console.log(this.feedbackTicket);
    return this.http.post(
      `${this._baseUrl}/` + this.feedbackTicket.Key + '.json',
      value
    );
  }

  fetchTicket(): Observable<any> {
    return this.http.get(`${this._baseUrl}.json`);
  }

  onDeleteTickets(ticket: any, index: any) {
    return this.http.delete(`${this._baseUrl}/` + ticket.Key + '.json');
  }

  onUpdateTicket(value: object) {
    return this.http.put(
      `${this._baseUrl}/` + this.ticket.Key + '.json',
      value
    );
  }
}
