import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';   // ✅ Import Location
import { filter } from 'rxjs/operators';
import { AddGateComponent } from './add-gate/add-gate.component';

@Component({
  selector: 'app-gates',
  templateUrl: './gates.component.html',
  styleUrls: ['./gates.component.scss']
})
export class GatesComponent implements OnInit, OnDestroy {

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle: boolean = false;
  gridCmp: any;
  tableList: any[] = [];
  canDelete = true;
  canUpdate = true;

  // ✅ Controls whether child route is active (hides table, shows router-outlet)
  isChildRouteActive: boolean = false;

  Status = [
    { name: 'Active', value: true },
    { name: 'Inactive', value: false }
  ];

  stages = [
    { name: 'Feasibility', count: 10, route: 'feasibility', status: true, description: 'Evaluate the technical and commercial viability of the project.', stageCode:"STG001", gateCode:"GT001" },
    { name: 'Design', count: 10, route: 'design', status: false, description: 'Develop the detailed design for the project.', stageCode:"STG002", gateCode:"GT002" },
    { name: 'Prototyping', count: 10, route: 'prototyping', status: false, description: 'Create prototypes to test the design.', stageCode:"STG003", gateCode:"GT003" },
    { name: 'Testing', count: 10, route: 'testing', status: false, description: 'Conduct thorough testing of the prototypes.', stageCode:"STG004", gateCode:"GT004" },
    { name: 'Launch', count: 10, route: 'launch', status: false, description: 'Deploy the final product to the market.', stageCode:"STG005", gateCode:"GT005" },
    { name: 'Implementation', count: 10, route: 'implementation', status: false, description: 'Implement the final solution in the production environment.', stageCode:"STG006", gateCode:"GT006" },
  ];

  private subs = new Subscription();

  constructor(
    public dialog: MatDialog,
    private dragulaService: DragulaService, 
    private router: Router,
    private _activeRoute: ActivatedRoute,
    private location: Location   // ✅ Inject Location
  ) {
    // ✅ Only destroy if group already exists to avoid errors
    if (this.dragulaService.find('MONITORSTEPS')) {
      this.dragulaService.destroy('MONITORSTEPS');
    }

    this.dragulaService.createGroup('MONITORSTEPS', {
      revertOnSpill: true,
    });

    this.subs.add(
      this.dragulaService.dropModel('MONITORSTEPS').subscribe(({ targetModel }) => {
        this.stages = [...targetModel];
      })
    );
  }

  ngOnInit(): void {
    this.tableList = [...this.stages];

    // ✅ Check on init whether we're already on a child route
    this.checkChildRoute();

    // ✅ Listen to every router navigation to toggle table vs child view
    this.subs.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.checkChildRoute();
        })
    );
  }

  ngOnDestroy(): void {
    this.dragulaService.destroy('MONITORSTEPS');
    this.subs.unsubscribe();
  }

  // ✅ Detects if a child route is currently active
  private checkChildRoute(): void {
    const childRoutes = this.stages.map(s => s.route);
    const currentUrl = this.router.url;

    // e.g. /app/gates/feasibility → has a child segment after /gates/
    this.isChildRouteActive = childRoutes.some(route =>
      currentUrl.includes(`/gates/${route}`)
    );
  }

  // ✅ Navigate to child component (same module, same outlet)
  navigateTo(route: string): void {
    this.router.navigate([route], { relativeTo: this._activeRoute });
  }

  // ✅ Go back using Location (browser history)
  goBack(): void {
    this.location.back();
  }

  public addmodule(item: any): void {
    // this.dialog.open(AddsecComponent, { data: item, width: '600px', height: 'auto' });
  }

  deleteConfirmation(item: any): void {
    // this.dialog.open(ConfirmationDialogComponent, { ... });
  }

  Confirmation(item: any): void {
    item.status = !item.status;
  }

  getTests(): void { }

  clearFilter(): void { }



  addGate(): void {
    const dialogRef = this.dialog.open(AddGateComponent, {
      width: '500px',
      height: 'auto',
      disableClose: false,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Gate added:', result);
        // push result into your list here
      }
    });
  }

}