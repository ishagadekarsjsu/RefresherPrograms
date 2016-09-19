package examples.multithreading;

public class MultiThreadingDemo extends Thread {

	public static void main(String args[]) {
		
		Addition additionThread = new Addition("Addition");
		additionThread.start();
		
		Subtraction subtraction = new Subtraction("Subtraction");
		subtraction.start();
	}
}
