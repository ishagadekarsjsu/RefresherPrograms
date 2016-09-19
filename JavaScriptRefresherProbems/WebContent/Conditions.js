function populateCourses(courses) {
	var seCourses = [ 'Enterprise Distributed Systems',
			'Enterprise Software Platforms', 'Cloud Technologies' ];
	var ceCourses = [ 'Network Architecture and Protocols',
			'Computer Architecture', 'Network Programming and Application' ];

	var selectedMajor = document.getElementById("department").value;

	if (selectedMajor == "Computer Engineering") {
		courses.options.length = 0;
		for ( var count = 0; count < ceCourses.length; count++) {
			createOption(courses, ceCourses[count], ceCourses[count]);
		}
	} else {
		courses.options.length = 0;
		for ( var count = 0; count < seCourses.length; count++) {
			createOption(courses, seCourses[count], seCourses[count]);
		}
	}

}

function createOption(courses, text, value) {
	var opt = document.createElement('option');
	document.getElementById('label2').style.display = 'inline';
	courses.style.display = 'inline';
	opt.value = value;
	opt.text = text;
	courses.options.add(opt);
}

function showCourseInfo() {
	var courseName = document.getElementById("courses").value;
	var courseInfo = "";
	document.getElementById("label3").style.display = 'inline';
	switch (courseName) {
	case 'Enterprise Distributed Systems':
		courseInfo = "Introduction to application protocols for distributed systems"
				+ " including asynchronous messaging, and Web services. "
				+ "Lab is based on using protocols to build distributed systems.";
		document.getElementById("para").innerHTML = courseInfo;
		break;
	case 'Enterprise Software Platforms':
		courseInfo = "Enterprise software, system and virtualized platforms. "
				+ "Covers OSs, NOS, security, databases, transactions,"
				+ " groupware, components, web services, web, systems management and app development.";
		document.getElementById("para").innerHTML = courseInfo;
		break;
	case 'Cloud Technologies':
		courseInfo = "Cloud computing concepts, architectures, infrastructures, "
				+ "enterprise adoption strategies, "
				+ "Software-as-a-Service (SaaS), Platform-as-a-Service (PaaS), "
				+ "Infrastructure-as-a-Service (IaaS), modern cloud computing technologies and tools";
		document.getElementById("para").innerHTML = courseInfo;
		break;
	case 'Network Architecture and Protocols':
		courseInfo = "In-depth study of the principles and architecture of Internet protocols "
				+ "in current practice. Analysis of protocols of network, transport, and application layers.";
		document.getElementById("para").innerHTML = courseInfo;
		break;
	case 'Computer Architecture':
		courseInfo = "Computer design overview, processor instruction set architecture and "
				+ "microarchitecture, instruction-level parallelism, memory hierarchy, storage and "
				+ "I/O systems, multicore/multiprocessor and data/thread-level parallelism, "
				+ "introduction to parallel programming.";
		document.getElementById("para").innerHTML = courseInfo;
		break;
	case 'Network Programming and Application':
		courseInfo = "Development and implementation of networking software for building distributed"
				+ " applications. Application Programming Interfaces: BSD Sockets, Winsock, "
				+ "Remote Procedure Call and Middleware. ";
		document.getElementById("para").innerHTML = courseInfo;
		break;
	}
}