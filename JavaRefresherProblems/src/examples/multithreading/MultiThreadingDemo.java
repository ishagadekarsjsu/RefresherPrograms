package examples.multithreading;

public class MultiThreadingDemo {

	public static void main(String args[]) {

		Addition additionThread = new Addition("Thread1", 10, 5);
		additionThread.start();

		Addition additionThread2 = new Addition("Thread2", 55, 21);
		additionThread2.start();
		
		Addition additionThread3 = new Addition("Thread3", 1, 2);
		additionThread3.start();

	}
}
