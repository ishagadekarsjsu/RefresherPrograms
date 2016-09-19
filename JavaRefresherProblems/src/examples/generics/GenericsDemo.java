package examples.generics;

public class GenericsDemo<K,V> {
	
	K first;
	V second;

	public void setArguments(K first, V second) {
		this.first = first;
		this.second = second;
	}
	
	public int compare () {
		return ((Comparable) first).compareTo((Comparable) second);
	}
	
	public void printResult(int result) {
		if (result < 0) {
			System.out.println("First is less than second");
		} else if (result > 0) {
			System.out.println("First is greater than second");
		} else {
			System.out.println("First is equal to second");
		}
	}
	
	public static void main(String args[]) {
		GenericsDemo<Integer, Integer> genericsDemo = new GenericsDemo<Integer, Integer>();
		GenericsDemo<String, String> genericsDemoStr = new GenericsDemo<String, String>();
		GenericsDemo<Double, Double> genericsDemoDouble = new GenericsDemo<Double, Double>();
		
		int result;
		genericsDemo.setArguments(30, 20);
		result = genericsDemo.compare();
		genericsDemo.printResult(result);
		
		genericsDemoStr.setArguments("This is a string", "This is a string");
		result = genericsDemoStr.compare();
		genericsDemo.printResult(result);
		
		genericsDemoDouble.setArguments(15.2, 65.7);
		result = genericsDemoDouble.compare();
		genericsDemo.printResult(result);
	}
}
