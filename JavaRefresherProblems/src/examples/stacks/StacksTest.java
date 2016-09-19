package examples.stacks;

import org.junit.Assert;
import org.junit.Test;

public class StacksTest {

	@Test
	public void testPush() {
		Stacks stack = new Stacks();
		stack.push("Isha");
		stack.push("Gadekar");
		Assert.assertEquals("Isha", stack.st.get(0));
		Assert.assertEquals("Gadekar", stack.st.get(1));
	}
	
	@Test
	public void testUndo()
	{
		Stacks stack = new Stacks();
		stack.push("Hello");
		stack.push("World");
		String poppedStr = stack.undo();
		Assert.assertNotSame("Hello", poppedStr);
		Assert.assertEquals("World", poppedStr);
		Assert.assertEquals("Hello", stack.st.get(0));
	}

}
