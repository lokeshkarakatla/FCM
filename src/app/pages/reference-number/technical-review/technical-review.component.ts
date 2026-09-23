import { Component } from '@angular/core';
@Component({
  selector: 'app-technical-review',
  templateUrl: './technical-review.component.html',
  styleUrls: ['./technical-review.component.scss']
})
export class TechnicalReviewComponent {
  reviewDate: string = '';
  reviewedBy: string = '';
  defectType: string = '';
  rootCause: string = '';
  engineeringAnalysis: string = '';
  designDefect: boolean = false;
  manufacturingDefect: boolean = false;
  supplierComponent: boolean = false;
  containmentRequired: boolean = false;
  recallRequired: boolean = false;
  recommendations: string = '';

  save(): void {
    console.log('Technical review data saved successfully');
  }
}

