import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent} from './player-details/player-details.component';
import { HomeComponent } from './Home/home.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'players', component: PlayerListComponent},
  {path: 'staff', component: StaffListComponent},
  {path: 'add-player', component: PlayerDetailsComponent},
  {path: 'players/:playerId', component: PlayerDetailsComponent},
  {path: 'staff/:staffId', component: StaffDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, PlayerListComponent, PlayerDetailsComponent, StaffListComponent, StaffDetailsComponent]
