import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { GatesComponent } from './gates.component';
import { GateFeasibilityComponent } from './gate-feasibility/gate-feasibility.component';
import { GateDesignComponent } from './gate-design/gate-design.component';
import { GatePrototypingComponent } from './gate-prototyping/gate-prototyping.component';
import { GateTestingComponent } from './gate-testing/gate-testing.component';
import { GateLaunchComponent } from './gate-launch/gate-launch.component';
import { GateImplimentationComponent } from './gate-implimentation/gate-implimentation.component';
import { DragulaModule } from "ng2-dragula";
import { AddcriteriaComponent } from './addcriteria/addcriteria.component';
import { AddGateComponent } from './add-gate/add-gate.component';

// ✅ routes definition was missing
const routes: Routes = [
    { path: "", component: GatesComponent },
    { path: 'feasibility', component: GateFeasibilityComponent, data: { breadcrum: 'Feasibility' } },
    { path: 'design', component: GateDesignComponent, data: { breadcrum: 'Design' } },
    { path: 'prototyping', component: GatePrototypingComponent, data: { breadcrum: 'Prototyping' } },
    { path: 'testing', component: GateTestingComponent, data: { breadcrum: 'Testing' } },
    { path: 'launch', component: GateLaunchComponent, data: { breadcrum: 'Launch' } },
    { path: 'implementation', component: GateImplimentationComponent, data: { breadcrum: 'Implementation' } },
]

@NgModule({
    declarations: [
        GatesComponent,
        GateFeasibilityComponent,
        GateDesignComponent,
        GatePrototypingComponent,
        GateTestingComponent,
        GateLaunchComponent,
        GateImplimentationComponent,
        AddcriteriaComponent,
        AddGateComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes), // ✅ routes now defined above
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatPaginatorModule,
        MatCardModule,
        MatSelectModule,
        MatRadioModule,
        DragulaModule   // ✅ no .forRoot() — that goes in AppModule only
    ],
    providers: []
})
export class GatesModule { }