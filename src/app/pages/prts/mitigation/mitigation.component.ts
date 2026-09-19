import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mitigation',
  templateUrl: './mitigation.component.html',
  styleUrls: ['./mitigation.component.scss']
})
export class MitigationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  content: string = '';

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ script: 'sub' }, { script: 'super' }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['link', 'image'],
      ['clean']
    ]
  };

    goBack(){
    this.router.navigate(['/app/prts-part/prtsissuestatus/psr']);
  }

}
