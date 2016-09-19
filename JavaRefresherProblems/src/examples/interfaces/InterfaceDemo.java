package examples.interfaces;

public class InterfaceDemo {

	public static void main(String args[]) {
		
		Basketball basketball = new Basketball();
		Cricket cricket = new Cricket();

		int noOfPlayers;

		noOfPlayers = basketball.printNumberOfPlayers();
		System.out.println("Number of players in basketball is : "
				+ noOfPlayers);

		noOfPlayers = cricket.printNumberOfPlayers();
		System.out.println("Number of players in cricket is : " + noOfPlayers);

		String equipments_basketball = basketball.sportsEquipmentsUsed();
		System.out.println("Equipments needed in basketball are : "
				+ equipments_basketball);

		String equipments_cricket = cricket.sportsEquipmentsUsed();
		System.out.println("Equipments needed in cricket are: "
				+ equipments_cricket);
	}
}
