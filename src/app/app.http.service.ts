import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class HTTPSERVICE{

    constructor(private http: HttpClient){}

    feedbackTicket:any;
    editMode:boolean = false;
    ticket:any;


    addTicket(value: object){
        return this.http.post('https://customer-feedback-service-default-rtdb.firebaseio.com/ticket.json',value)
    }

    onFeedback(value:object)
    {
        console.log(this.feedbackTicket)
        return this.http.post('https://customer-feedback-service-default-rtdb.firebaseio.com/ticket/'+this.feedbackTicket.Key+'.json',value)
    }

    fetchData():Observable<any>{
      return this.http.get('https://customer-feedback-service-default-rtdb.firebaseio.com/ticket.json');
    }

    onDeleteTickets(ticket:any,index:any){
        return this.http.delete('https://customer-feedback-service-default-rtdb.firebaseio.com/ticket/'+ticket.Key+'.json')

    }

    onUpdateTicket(value:object)
    {
        return this.http.put('https://customer-feedback-service-default-rtdb.firebaseio.com/ticket/'+this.ticket.Key+'.json',value)

    }

}