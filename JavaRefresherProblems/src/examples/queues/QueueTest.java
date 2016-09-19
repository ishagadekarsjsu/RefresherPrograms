package examples.queues;

import java.util.LinkedList;
import java.util.Queue;

import junit.framework.Assert;

import org.junit.Test;

public class QueueTest {
	
	@Test
	public void testAddToOrderList() {
		QueueImpl impl = new QueueImpl();
		Queue<Order> orders = new LinkedList<Order>();
		
		Order order1 = new Order(1, "Manasi");
		Order order2 = new Order(2, "Amit");
		Order order3 = new Order(3, "Swapnil");
		Order order4 = new Order(4, "Radhika");

		impl.addToOrderList(order1, orders);
		impl.addToOrderList(order2, orders);
		impl.addToOrderList(order3, orders);
		impl.addToOrderList(order4, orders);
		
		Order actual = orders.element();
		
		Assert.assertEquals(4, orders.size());
		
		Assert.assertEquals("Manasi", actual.getName());
		Assert.assertEquals(1, actual.getOrderId());
		
		Order order5 = new Order(5, "Isha");
		impl.addToOrderList(order5, orders);
		Order order6 = new Order(6, "Pradnya");
		String result = impl.addToOrderList(order6, orders);
		Assert.assertEquals("Only 5 orders can be processed at max", result);
	}

	@Test
	public void testRemoveFromOrderList() {
		QueueImpl impl = new QueueImpl();
		Queue<Order> orders = new LinkedList<Order>();
		
		Order order1 = new Order(1, "Amit");
		Order order2 = new Order(2, "Manasi");
		Order order3 = new Order(3, "Swapnil");
		Order order4 = new Order(4, "Radhika");

		impl.addToOrderList(order1, orders);
		impl.addToOrderList(order2, orders);
		impl.addToOrderList(order3, orders);
		impl.addToOrderList(order4, orders);
		
		Order actual = orders.poll();
		
		Assert.assertEquals("Amit", actual.getName());
		Assert.assertEquals(1, actual.getOrderId());
		
		Order result = orders.element();
		Assert.assertEquals("Manasi", result.getName());
		Assert.assertEquals(2, result.getOrderId());
	}
}
