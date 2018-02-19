import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesComponent } from './votes.component';

describe('VotesComponent', () => {
  let component: VotesComponent;
  let fixture: ComponentFixture<VotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('upVotesShouldIncrementTotalVotes', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('upVotesShouldDecrementTotalVotes', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });

});
