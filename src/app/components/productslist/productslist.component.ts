import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-productslist",
  templateUrl: "./productslist.component.html",
  styleUrls: ["./productslist.component.css"]
})
export class ProductslistComponent implements OnInit {
  todos: Array<any> = [
    {
      name: "eat food",
      done: false
    },
    {
      name: "walk the dog",
      done: true
    },
    {
      name: "do homework",
      done: false
    }
  ];

  constructor() {}

  ngOnInit() {}
}
