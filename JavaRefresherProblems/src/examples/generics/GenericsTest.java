package examples.generics;

import junit.framework.Assert;

import org.junit.Test;

public class GenericsTest {

	@Test
	public void testGenericCompare() {
		GenericsDemo<Integer, Integer> genericsDemo = new GenericsDemo<Integer, Integer>();
		GenericsDemo<String, String> genericsDemoStr = new GenericsDemo<String, String>();
		GenericsDemo<Double, Double> genericsDemoDouble = new GenericsDemo<Double, Double>();
		int result;
		
		genericsDemo.setArguments(10, 20);
		result = genericsDemo.compare();
		Assert.assertTrue(result < 0);
		
		genericsDemoStr.setArguments("String", "This is a string");
		result = genericsDemoStr.compare();
		Assert.assertTrue(result < 0);
		
		genericsDemoDouble.setArguments(85.2, 65.7);
		result = genericsDemoDouble.compare();
		Assert.assertTrue(result > 0);
	}
}
