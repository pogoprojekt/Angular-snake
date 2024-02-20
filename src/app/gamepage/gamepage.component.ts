import { Component, EventEmitter, Input, Output, ViewChild,  } from '@angular/core';
import { NgxSnakeComponent, NgxSnakeModule } from 'ngx-snake';

@Component({
  selector: 'app-gamepage',
  standalone: true,
  imports: [NgxSnakeModule],
  templateUrl: './gamepage.component.html',
  styleUrl: './gamepage.component.scss'
})
export class GamepageComponent {
  @Input() playerName: string = '';
  @Output() exitGameEvent = new EventEmitter<void>();
  @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent;
  public color = '';
  points: number = 0;

  timeInSeconds: number = 0;
  timer: any;

  gameStatus: string = 'Ready';


  exitGame() {
    this.exitGameEvent.emit();
  }
  
  public startButton() {
    this.timeInSeconds = 0;
    this._snake.actionStart();
    this.timer = setInterval(() => {
      this.timeInSeconds++;
    }, 1000);
    this.gameStatus = "Started";
    this.color = 'green';

  }

  public stopButton() {
    this._snake.actionStop();

    clearInterval(this.timer);
    this.gameStatus = "Paused";
    this.color = 'orange';
  }

  public resetButton() {
    this._snake.actionReset();
    clearInterval(this.timer);
    this.timeInSeconds = 0;
    this.gameStatus = "Ready";
    this.color = 'green';

  }

  public upButton() {
    this._snake.actionUp();
  }

  public downButton() {
    this._snake.actionDown();
  }

  public leftButton() {
    this._snake.actionLeft();
  }

  public rightButton() {
    this._snake.actionRight();
  }
  public onGrow() {

    this.points += 1; 

  }
  public onGameOver() {
    alert('Game Over!');
    this.gameStatus = "Ready";
    clearInterval(this.timer);

  }

  // private _updateColor() {
  //   if (this.gameStatus = "Ready") {
  //     this.color = 'green';

  //   } else if (this.gameStatus = "Paused") {
  //     this.color = 'orange';

  //   } else {
  //     this.color = 'red'
  //   }
  // }
}
