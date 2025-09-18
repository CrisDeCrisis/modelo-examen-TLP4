interface IOrder {
  place(): void;
}

class DineInOrder implements IOrder {
  constructor(private tableNumber: number) {}

  place(): void {
    console.log(`Pedido para comer en el lugar: Mesa ${this.tableNumber}`);
  }
}

class TakeAwayOrder implements IOrder {
  constructor(private deliveryAddress: string) {}

  place(): void {
    console.log(`Pedido para llevar a: ${this.deliveryAddress}`);
  }
}

class OrderFactory {
  createOrder(type: string, details: any): IOrder {
    if (type === "DineIn") {
      return new DineInOrder(details.tableNumber);
    }

    if (type === "TakeAway") {
      return new TakeAwayOrder(details.deliveryAddress);
    }

    throw new Error("Tipo de pedido no soportado");
  }
}

const orderFactory = new OrderFactory();

const dineInOrder = orderFactory.createOrder("DineIn", { tableNumber: 5 });
const takeAwayOrder = orderFactory.createOrder("TakeAway", {
  deliveryAddress: "Junin 123",
});

dineInOrder.place();
takeAwayOrder.place();
