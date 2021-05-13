import { JsonPipe } from '@angular/common';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Player } from '../models/player-interface';
import { PlayerService } from '../models/player-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PlayerModalComponent } from '../modals/player-modal/player-modal.component';
import { PlayerDetailsComponent } from '../player-details/player-details.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  public players: Player[];
  public playerCount: number;

  constructor(
    private playerService: PlayerService,
    public dialog: MatDialog
    ) {
  }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(result => {
        this.players = result;
        this.playerCount = result.length;
      },
      error => console.error(error));
  }

  ngOnChanges(){
    this.playerService.getPlayers().subscribe(result => {
      this.players = result;
    },
    error => console.error(error));
  }

  deletePlayer(playerId: number) {
    this.playerService.deleteSpecificPlayer(playerId).subscribe(result => {
      console.log(result);
      this.playerService.getPlayers().subscribe(result => {
        this.players = result;
        console.log(this.players)
      }, error => console.error(error));
    });
  }

  addPlayer(player: Player){
    this.playerService.addPlayer(player).subscribe(result => {
      console.log(result);
      this.playerService.getPlayers().subscribe(result => {
        this.players = result;
        console.log(this.players)
      }, error => console.error(error));
    });
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(PlayerModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.playerService.getPlayers().subscribe(result => {
        this.players = result;
        console.log(this.players)
      }, error => console.error(error));
    });
  }

  openDialogWithInfo(playerId: number): void {
    const dialogRef = this.dialog.open(PlayerModalComponent, {
      width: '400px',
      data: { currentPlayerId: playerId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.playerService.getPlayers().subscribe(result => {
        this.players = result;
        console.log(this.players)
      }, error => console.error(error));
      console.log(result)
    });
  }
}
