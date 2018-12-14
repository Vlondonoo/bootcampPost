import { NgModule } from '@angular/core';
import {MatNativeDateModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule, MatList,} from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  imports: [MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
  exports: [MatNativeDateModule,FormsModule,
    MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
   
  })
  @NgModule({
    declarations: [],
    imports: [
      MatButtonModule,
      MatToolbarModule,
      MatListModule,
      MatButtonToggleModule
    ],
    exports: [
      MatButtonModule,
      MatToolbarModule,
      MatButtonToggleModule
    ],
  })
export class MyMaterialModule { }
