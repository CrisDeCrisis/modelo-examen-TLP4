class OldOrderSystem {
  placeOrder(orderDetails: string): void {
    console.log(`Pedido realizado en el sistema antiguo: ${orderDetails}`);
  }
}

class OrderAdapter {
  private oldSystem: OldOrderSystem;

  constructor(oldSystem: OldOrderSystem) {
    this.oldSystem = oldSystem;
  }

  submitOrder(orderDetails: string): void {
    this.oldSystem.placeOrder(orderDetails);
  }
}

const oldSystem = new OldOrderSystem();
const adapter = new OrderAdapter(oldSystem);

adapter.submitOrder("Orden para la mesa 5");
