import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffees: Array<Coffee> =[];
  countBlend: number=0;
  countOrigen: number=0;

  constructor(private coffeeService: CoffeeService) { }
  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
      coffees.forEach((c) => {
        if (c.tipo==="Blend") {
          this.countBlend+=1;
        } else {
          this.countOrigen+=1;
        }
      });
    });
  }

  ngOnInit() {

    this.getCoffees();
  }

}
