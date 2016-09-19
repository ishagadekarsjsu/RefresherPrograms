package examples.queues;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;

public class QueueImpl {
	int capacity = 5;

	String addToOrderList(Order order, Queue<Order> orders) {
		String result;
		if (orders.size() < 5) {
			orders.add(order);
			result = "Order successfully added!";
		} else {
			result = "Only 5 orders can be processed at max";
		}
		return result;
	}

	void removeFromOrderList(Queue<Order> orders) {

		if (!orders.isEmpty()) {
			Order order = orders.peek();
			System.out.println("Order with order Id : " + order.getOrderId()
					+ " and name : " + order.getName() + " has been removed");
			orders.remove();
		}

	}

	void displayOrderList(Queue<Order> orders) {
		Iterator<Order> iterator = orders.iterator();
		int count = 0;
		while (iterator.hasNext()) {
			count++;
			Order order = iterator.next();
			System.out
					.println("Order number : " + count + "\nName : "
							+ order.getName() + " and Order Id : "
							+ order.getOrderId());
		}
	}

	public static void main(String args[]) {
		QueueImpl impl = new QueueImpl();
		Queue<Order> orders = new LinkedList<Order>();

		Order order1 = new Order(1, "Isha");
		Order order2 = new Order(2, "Shruti");
		Order order3 = new Order(3, "Apoorva");
		Order order4 = new Order(4, "Anne");

		impl.addToOrderList(order1, orders);
		impl.addToOrderList(order2, orders);
		impl.addToOrderList(order3, orders);
		impl.addToOrderList(order4, orders);

		if (orders.size() > 0) {
			System.out.println("Displaying all the orders\n");
			impl.displayOrderList(orders);
			System.out
					.println("\nRemoving orders from the queue for processing\n");
			while (!orders.isEmpty()) {
				impl.removeFromOrderList(orders);
			}
		} else {
			System.out.println("No orders to process.!");
		}
	}
}
