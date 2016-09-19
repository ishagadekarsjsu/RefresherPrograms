package examples.queues;

public class Order {

	int orderId;
	String name;
	
	public Order(int orderId, String name) {
		this.orderId = orderId;
		this.name = name;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
