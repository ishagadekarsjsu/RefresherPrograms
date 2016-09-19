package examples.interfaces;

public class Basketball implements Sports {

	@Override
	public int printNumberOfPlayers() {
		int noOfPlayers = 5;
		return noOfPlayers;
	}

	@Override
	public String sportsEquipmentsUsed() {
		String equipments = "Basketball Hoops, Basketballs, Basketball Arm & Leg Sleeves, Basketball Shoes";
		return equipments;
	}

}
