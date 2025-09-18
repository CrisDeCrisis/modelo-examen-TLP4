class ReservationManager {
  private static instance: ReservationManager;

  private constructor() {}

  public static getInstance(): ReservationManager {
    if (!ReservationManager.instance) {
      ReservationManager.instance = new ReservationManager();
    }
    return ReservationManager.instance;
  }
}

const manager1 = ReservationManager.getInstance();
const manager2 = ReservationManager.getInstance();

console.log(manager1 === manager2); // true
