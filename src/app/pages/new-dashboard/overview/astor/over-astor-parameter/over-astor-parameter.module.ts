import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverAstorParameterComponent } from './over-astor-parameter.component';
import { AstorCratingComponent } from './astor-crating/astor-crating.component';
import { AstorDraingComponent } from './astor-draing/astor-draing.component';



@NgModule({
  declarations: [
    OverAstorParameterComponent,
    AstorCratingComponent,
    AstorDraingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OverAstorParameterModule { }
