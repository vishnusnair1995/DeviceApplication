import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("discoveryyyyy"+this.router.url);
  }

}
