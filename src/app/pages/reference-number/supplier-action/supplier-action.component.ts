import { Component } from '@angular/core';
@Component({
  selector: 'app-supplier-action',
  templateUrl: './supplier-action.component.html',
  styleUrls: ['./supplier-action.component.scss']
})
export class SupplierActionComponent {
  supplierName: string = '';
  supplierContact: string = '';
  componentName: string = '';
  componentPartNo: string = '';
  notificationDate: string = '';
  responseDeadline: string = '';

  actions = [
    { id: 1, action: 'Replace faulty batch of brake sensors', supplier: 'AutoParts Ltd', deadline: '2024-09-25', status: 'Open' },
    { id: 2, action: 'Provide material test certificates', supplier: 'AutoParts Ltd', deadline: '2024-09-20', status: 'Completed' },
  ];
  remarks: string = '';
}
