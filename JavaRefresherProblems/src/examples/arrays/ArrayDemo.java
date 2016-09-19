package examples.arrays;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ArrayDemo {

	public int[] displaySortedArray(int[] array) {
		Arrays.sort(array);
		System.out.println(Arrays.toString(array));
		return array;
	}

	public int[] minMax(int[] array) {
		int maxValue = array[0];
		int minValue = array[0];

		for (int min_count = 1; min_count < array.length; min_count++) {
			if (array[min_count] < minValue) {
				minValue = array[min_count];
			}
		}

		for (int max_count = 1; max_count < array.length; max_count++) {
			if (array[max_count] > maxValue) {
				maxValue = array[max_count];
			}
		}

		System.out.println("Min value is : " + minValue
				+ " and Max value is : " + maxValue);
		int[] result = new int[2];
		result[0] = minValue;
		result[1] = maxValue;

		return result;

	}

	public int[] getInput(int array[], int option) {
		switch (option) {
		case 1:
			return displaySortedArray(array);
		case 2:
			return minMax(array);
		case 3:
			break;
		default:
			int[] result = new int[1];
			result[0] = -1;
			System.out.println("You chose an incorrect option.");

			return result;

		}
		return null;
	}

	public static void main(String args[]) {
		try {
			ArrayDemo arrayDemo = new ArrayDemo();
			int option = 0;
			int array[] = new int[5];
			System.out.println("Enter 5 numbers: ");
			BufferedReader br = new BufferedReader(new InputStreamReader(
					System.in));
			for (int count = 0; count < 5; count++) {
				array[count] = Integer.parseInt(br.readLine());
			}
			System.out
					.println("Choose an option : \n1. Display sorted array \n2. Find minimum and maximum number \n3. Exit");
			option = Integer.parseInt(br.readLine());
			arrayDemo.getInput(array, option);
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
