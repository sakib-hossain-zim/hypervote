import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ShareComponent } from './Share/Share.component';


  import { ShareholderComponent } from './Shareholder/Shareholder.component';
  import { InstitutionComponent } from './Institution/Institution.component';
  import { RegulatorComponent } from './Regulator/Regulator.component';


  import { MakeVoteComponent } from './MakeVote/MakeVote.component';
  import { TransferShareComponent } from './TransferShare/TransferShare.component';  
@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    
    ShareComponent
    ,
    
    ShareholderComponent,
      InstitutionComponent,
      
      RegulatorComponent
      ,

    MakeVoteComponent,
        
        TransferShareComponent
          
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
