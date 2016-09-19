package examples.stacks;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Stacks {

	Stack<String> st = new Stack<String>();

	public void push(String input) {
		st.push(input);
	}

	public String undo() {
		String poppedStr = "";
		if (!st.isEmpty()) {
			poppedStr = st.pop();
			System.out.println("Removed string : " + poppedStr);
		} else {
			System.out.println("Stack is Empty!");
		}
		return poppedStr;
	}

	public void displayStack() {
		for (int i = st.size() - 1; i >= 0; i--)
			System.out.println(st.get(i));
	}

	public String readInput() throws IOException {
		System.out.println("Enter a string : ");
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		return br.readLine();
	}

	public static void main(String args[]) {
		Stacks stack = new Stacks();
		try {
			int option = 0;
			String input = stack.readInput();
			stack.push(input);

			do {
				System.out
						.println("Choose an option : \n1. Undo \n2. Enter another string \n3. View entered values \n4. Exit");
				BufferedReader br = new BufferedReader(new InputStreamReader(
						System.in));
				option = Integer.parseInt(br.readLine());

				switch (option) {
				case 1:
					stack.undo();
					break;

				case 2:
					input = stack.readInput();
					stack.push(input);
					break;

				case 3:
					System.out.println("Contents of the stack are : \n");
					stack.displayStack();
					break;

				case 4:
					break;

				default:
					System.out.println("You chose an incorrect option.");
					break;
				}

			} while (option == 1 || option == 2 || option == 3);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
