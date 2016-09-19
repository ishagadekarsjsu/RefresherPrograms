package examples.multithreading;

public class Addition extends Thread {
	
	public Addition(String threadName) {
		System.out.println("Executing thread with Name : " + threadName);
	}

	public void run() {
		int num1 = 10, num2 = 5;
		int sum = num1 + num2;
		System.out.println("Addition is : " + sum);
	}
}
