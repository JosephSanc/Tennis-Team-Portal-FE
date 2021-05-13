import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from 'src/app/models/player-service.service';
import { PlayerDetailsComponent } from 'src/app/player-details/player-details.component';
import { Player } from '../../models/player-interface';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.css']
})
export class PlayerModalComponent implements OnInit {
  testName: string | undefined;
  showOptionalFields: boolean = false;

  player: Player = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: ""
  }

  constructor(
    public dialogRef: MatDialogRef<PlayerModalComponent>,
    private playerService: PlayerService,
    @Inject(MAT_DIALOG_DATA) public data: {currentPlayerId: number}) { }

  ngOnInit(): void {
    if(this.data){
      this.playerService.getSpecificPlayer(this.data.currentPlayerId).subscribe(result => {
        this.player = result;
      });
    }
  }

  addPlayer(){
    this.playerService.addPlayer(this.player).subscribe(result => {
      this.dialogRef.close({
        player: this.player,
      });
    })
  }

  updatePlayer(){
    this.playerService.updatePlayer(this.data.currentPlayerId, this.player).subscribe(result => {
      this.dialogRef.close({
        player: this.player,
      });
    });
  }

  closeDialogue(){
    this.dialogRef.close();
  }

  isEditing() : boolean{
    if(this.data){
      return true;
    }
    return false;
  }

  reverseShowFieldsProperty(){
    this.showOptionalFields = !this.showOptionalFields;
  }


}
