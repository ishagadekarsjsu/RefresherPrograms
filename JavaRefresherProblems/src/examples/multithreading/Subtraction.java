package examples.multithreading;

public class Subtraction extends Thread {

	public Subtraction(String threadName) {
		System.out.println("Executing thread with Name : " + threadName);
	}

	public void run() {
		int num1 = 10, num2 = 5;
		int difference = num1 - num2;
		System.out.println("Subtraction is : " + difference);
	}
}
