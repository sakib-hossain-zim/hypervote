import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { ShareComponent } from './Share/Share.component';


  import { ShareholderComponent } from './Shareholder/Shareholder.component';
  import { InstitutionComponent } from './Institution/Institution.component';
  import { RegulatorComponent } from './Regulator/Regulator.component';


  import { MakeVoteComponent } from './MakeVote/MakeVote.component';
  import { TransferShareComponent } from './TransferShare/TransferShare.component';  
const routes: Routes = [
     //{ path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'Share', component: ShareComponent},
    
    
      { path: 'Shareholder', component: ShareholderComponent},
      
      { path: 'Institution', component: InstitutionComponent},
      
      { path: 'Regulator', component: RegulatorComponent},
      
      
        { path: 'MakeVote', component: MakeVoteComponent},
        
        { path: 'TransferShare', component: TransferShareComponent},
        
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
