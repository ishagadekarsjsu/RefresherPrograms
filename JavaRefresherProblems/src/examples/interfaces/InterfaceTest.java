package examples.interfaces;

import org.junit.Assert;
import org.junit.Test;

public class InterfaceTest {

	@Test
	public void testBasketball() {
		Basketball basketball = new Basketball();
		Assert.assertEquals(5, basketball.printNumberOfPlayers());
		String expected = "Basketball Hoops, Basketballs, Basketball Arm & Leg Sleeves, Basketball Shoes";
		String equipments = basketball.sportsEquipmentsUsed();
		Assert.assertEquals(expected, equipments);
	}

	@Test
	public void testCricket() {
		Cricket cricket = new Cricket();
		Assert.assertEquals(11, cricket.printNumberOfPlayers());
		String expected = "Bat, Ball, Stumps, Bails, Leg pads, Gloves, Cricket Shoes";
		String equipments = cricket.sportsEquipmentsUsed();
		Assert.assertEquals(expected, equipments);
	}

}
