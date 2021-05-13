import { Injectable } from '@angular/core';
import { Player } from './player-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl = "https://localhost:44337";
  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get<Player[]>(`${this.baseUrl}/players`);
  }

  getSpecificPlayer(playerId: number) {
    return this.http.get<Player>(`${this.baseUrl}/players/${playerId}`);
  }

  deleteSpecificPlayer(playerId: number) {
    console.log(playerId);
    return this.http.delete(`${this.baseUrl}/players/delete/${playerId}`);
  }

  updatePlayer(playerId: number, player: Player) {
    return this.http.put(`${this.baseUrl}/players/update/${playerId}`, player);
  }

  addPlayer(player: Player) {
    return this.http.post(`${this.baseUrl}/players/add-player`, player);
  }

  logPlayerReceived(player: Player){
    console.log(player);
  }

}
