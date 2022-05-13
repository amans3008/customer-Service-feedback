import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HTTPSERVICE } from '../app.http.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private httpService: HTTPSERVICE,
    private router: Router) { }

  ngOnInit(): void {
  }

  feedbackForm = new FormGroup({
    'feedback': new FormControl(null,Validators.required),
    'Rating': new FormControl(null,Validators.required),
  })

  currentRating = 0;

  onSubmitFeedback(value:object){
    this.httpService.onFeedback(value)
    .subscribe((res)=>{
      this.router.navigate(['showTicket']);
    })
  }

}
