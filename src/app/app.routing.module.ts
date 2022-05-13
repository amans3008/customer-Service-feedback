import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedbackComponent } from "./feedback/feedback.component";
import { ShowTicketComponent } from "./show-ticket/show-ticket.component";
import { TicketFormComponent } from "./ticket-form/ticket-form.component";


const routes: Routes = [
    {
        path: '',
        component: ShowTicketComponent
    },
    {
        path: 'ticketForm',
        component: TicketFormComponent,
    },
    {
        path: 'showTicket',
        component: ShowTicketComponent,
    },
    {
        path: 'feedback',
        component: FeedbackComponent,
    }
    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
     
}