package examples.collections;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class CollectionsDemo {

	public static void main(String[] args) {

		CollectionsDemo collectionsDemo = new CollectionsDemo();

		Map<Integer, Student> studentInfo = collectionsDemo.populateMap();

		System.out.println("Enter the Id of the student to get Info : ");
		Scanner scanner = new Scanner(System.in);
		Integer Id = scanner.nextInt();
		Student student = collectionsDemo.searchStudentToGetInfo(studentInfo,
				Id);
		if(student != null) {
			System.out.println("Student Name : " + student.getName()
					+ "\n Department : " + student.getDepartment());
		} else {
			System.out.println("No record with this Id.!");
		}
		scanner.close();

	}

	public Student searchStudentToGetInfo(Map<Integer, Student> studentInfo,
			int Id) {

		Student student = null;
		if (studentInfo.containsKey(Id)) {
			student = studentInfo.get(Id);
		} 
		return student;
	}

	public Map<Integer, Student> populateMap() {

		Map<Integer, Student> studentInfo = new HashMap<Integer, Student>();

		List<String> names = new ArrayList<String>();
		names.add("Anjie Johnson");
		names.add("Smith Jones");
		names.add("Paul Williams");
		names.add("Andy Wilson");
		names.add("Mike Thomson");
		names.add("Shaun Walker");

		List<String> department = new ArrayList<String>();
		department.add("Computer Engineering");
		department.add("Software Engineering");

		for (int count = 0; count < 6; count++) {
			Student student = new Student();
			student.setName(names.get(count));
			if (count % 2 == 0) {
				student.setDepartment(department.get(0));
			} else {
				student.setDepartment(department.get(1));
			}
			studentInfo.put(count + 1, student);
		}
		return studentInfo;
	}

}
