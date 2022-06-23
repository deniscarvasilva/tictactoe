import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tictactoe';
  array: any[] = [];
  endGame: boolean = false;
  actualPlayer: boolean = false;
  ngOnInit() {
    this.array.push(['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']);
  }
  public choose(row: number, col: number) {
    this.array[row][col] = this.actualPlayer ? "X" : "O";
    if (this.verifyIfEndGame()) this.stopGame();
    this.actualPlayer = !this.actualPlayer;
  }

  public getContent(row: number, col: number): String {
    let result = this.array[row][col] === 'X' || this.array[row][col] === 'O' ? this.array[row][col] : '';
    return result;
  }
  public verifyIfEndGame(): boolean {
    if (this.verifyVerticalPosition()) {
      return true;
    }
    if (this.verifyHorizontalPosition()) {
      return true;
    }
    if (this.verifyDiagonalPosition()) {
      return true;
    }
    return false;
  }
  public verifyVerticalPosition(): boolean {
    let result = (this.array[0][0] === this.array[1][0]) && (this.array[0][0] === (this.array[2][0]));
    if (!result) result = (this.array[0][1] === this.array[1][1]) && (this.array[0][1] === (this.array[2][1]));
    if (!result) result = (this.array[0][2] === this.array[1][2]) && (this.array[0][2] === (this.array[2][2]));
    return result;
  }
  public verifyHorizontalPosition(): boolean {
    let result = (this.array[0][0] === this.array[0][1]) && (this.array[0][0] === (this.array[0][2]));
    if (!result) result = (this.array[1][0] === this.array[1][1]) && (this.array[1][0] === (this.array[1][2]));
    if (!result) result = (this.array[2][0] === this.array[2][1]) && (this.array[2][0] === (this.array[2][2]));
    return result;
  }
  public verifyDiagonalPosition(): boolean {
    let result = (this.array[0][0] === this.array[1][1]) && (this.array[0][0] === (this.array[2][2]));
    if (!result) result = (this.array[2][0] === this.array[1][1]) && (this.array[2][0] === (this.array[0][2]));
    return result;
  }
  public stopGame() {
    this.endGame = true;
  }
}
