package examples.interfaces;

public class Cricket implements Sports {

	@Override
	public int printNumberOfPlayers() {
		int noOfPlayers = 11;
		return noOfPlayers;
	}

	@Override
	public String sportsEquipmentsUsed() {
		String equipments = "Bat, Ball, Stumps, Bails, Leg pads, Gloves, Cricket Shoes";
		return equipments;
	}
}
