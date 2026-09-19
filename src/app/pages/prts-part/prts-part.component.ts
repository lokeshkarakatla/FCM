import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router'; // Ensure these are imported
import { ObjectiveIthelpDeskComponent } from '../objective-audits/objective-ithelp-desk/objective-ithelp-desk.component';

@Component({
  selector: 'app-prts-part',
  templateUrl: './prts-part.component.html',
  styleUrls: ['./prts-part.component.scss']
})
export class PrtsPart1Component implements OnInit {
  isOpen = true;

  // This is the corrected constructor
  constructor(
    public dialog: MatDialog,
    private router: Router,
    
    private route: ActivatedRoute
  ) {}
  
   
  isNavOpen = true;
 
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  ngOnInit(): void {}

  public toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  itHelpDeskPop(item: any) {
    const dialogRef = this.dialog.open(ObjectiveIthelpDeskComponent, {
      data: item,
      height: 'auto',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(data => {
      // This line will now work correctly
      this.router.navigate(['newissue'], { relativeTo: this.route });
    });
  }
}