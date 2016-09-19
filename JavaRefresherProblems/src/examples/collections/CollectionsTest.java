package examples.collections;

import java.util.Map;

import junit.framework.Assert;

import org.junit.Test;

public class CollectionsTest {

	@Test
	public void testsearchStudentToGetInfo() {
		CollectionsDemo collectionsDemo = new CollectionsDemo();
		int Id = 3;
		
		Map<Integer, Student> studentInfo = collectionsDemo.populateMap();
		Student student = collectionsDemo.searchStudentToGetInfo(studentInfo, Id);
		
		Assert.assertEquals("Paul Williams", student.getName());
		Assert.assertEquals("Computer Engineering", student.getDepartment());
		
		Assert.assertFalse("Software Engineering".equals(student.getDepartment()));
	}
	
	@Test
	public void testsearchStudentNotFound() {
		CollectionsDemo collectionsDemo = new CollectionsDemo();
		int Id = 8;
		
		Map<Integer, Student> studentInfo = collectionsDemo.populateMap();
		Student student = collectionsDemo.searchStudentToGetInfo(studentInfo, Id);
		
		Assert.assertEquals(null, student);
	}
}
