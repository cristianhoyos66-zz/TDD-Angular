import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent {

  totalVotes = 0;

  upVote() {
    this.totalVotes++;
  }

  downVote() {
    this.totalVotes--;
  }

}
