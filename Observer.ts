interface IObserver {
  update(status: string): void;
}

class Observer implements IObserver {
  constructor(private name: string) {}

  update(status: string): void {
    console.log(
      `${this.name} ha sido notificado: El pedido está ahora "${status}"`
    );
  }
}

class Order {
  private observers: Observer[] = [];
  private status: string = "";

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  updateStatus(status: string): void {
    this.status = status;
    this.notification();
  }

  private notification(): void {
    this.observers.forEach((ob) => ob.update(this.status));
  }
}

const order = new Order();

order.addObserver(new Observer("Cocina"));
order.addObserver(new Observer("Personal de sala"));
order.addObserver(new Observer("Notificación al cliente"));

order.updateStatus("Listo para servir");
