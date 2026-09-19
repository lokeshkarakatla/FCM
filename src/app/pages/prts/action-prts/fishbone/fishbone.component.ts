import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PartsData } from '../../PartsData';

@Component({
  selector: 'app-fishbone',
  templateUrl: './fishbone.component.html',
  styleUrls: ['./fishbone.component.scss']
})
export class FishboneComponent implements OnInit {

  man: any[] = [];
  material: any[] = [];
  machines: any[] = [];
  methods: any[] = [];
  environment: any[] = [];
  supply: any[] = [];

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (environment.mode === 1) {
      const fishData = PartsData.fish();
      this.man = fishData.man;
      this.material = fishData.material;
      this.machines = fishData.machines;
      this.methods = fishData.methods;
      this.environment = fishData.environment;
      this.supply = fishData.supply;
    }
  }

  next() {
    this.router.navigate(['/app/prtsnavbar/why']);
  }

  back() {
    this.router.navigate(['/app/prtsnavbar/diagnosis']);
  }
}
