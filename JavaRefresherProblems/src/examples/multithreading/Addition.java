package examples.multithreading;

public class Addition extends Thread {

	private Thread thread;
	private String threadName;
	private int num1, num2;

	public Addition(String threadName, int num1, int num2) {
		this.threadName = threadName;
		System.out.println("\nExecuting thread with Name : " + threadName);
		this.num1 = num1;
		this.num2 = num2;
	}

	public void start() {
		System.out.println("Starting " + threadName);
		if (thread == null) {
			thread = new Thread(this, threadName);
			thread.start();
		}
	}

	public void run() {
		int sum = num1 + num2;
		System.out.println("Addition is : " + sum);
		System.out.println("Thread " +  threadName + " exiting.");
	}
}
