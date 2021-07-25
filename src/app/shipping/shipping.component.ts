import { CartService } from "./../cart.service";
import { Component } from "@angular/core";

@Component({
  selector: "shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent {
  shippingCosts = this.cartService.getShippingPrices();

  constructor(private cartService: CartService) {}
}
