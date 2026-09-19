import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closur-note',
  templateUrl: './closur-note.component.html',
  styleUrls: ['./closur-note.component.scss']
})
export class ClosurNoteComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/closure']);
    
  }
  next() {
    
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
