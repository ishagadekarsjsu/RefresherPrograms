package examples.arrays;

import org.junit.Test;
import org.junit.Assert;

public class ArrayDemoTest {

	@Test
	public void testSortedArray() {
		ArrayDemo arrayDemo = new ArrayDemo();
		int array[] = {32, 5, 78, 44, 100};
		int option = 1;
		int expected[] = {5, 32, 44, 78, 100};
		int actual[] = arrayDemo.getInput(array, option);
		
		Assert.assertArrayEquals(expected, actual);
	}

	@Test
	public void testMinMax() {
		ArrayDemo arrayDemo = new ArrayDemo();
		int array[] = {32, 5, 78, 44, 100};
		int option = 2;
		int expected[] = {5, 100};
		int actual[] = arrayDemo.getInput(array, option);
		
		Assert.assertArrayEquals(expected, actual);
	}
}