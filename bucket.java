package work;

import java.util.Scanner;
import java.util.TreeSet;
class bucket {
	public static void main(String[] args) {
		TreeSet<Integer> arrivalTimes = new TreeSet<Integer>();
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter Burstiness in Network");
		int L = scanner.nextInt();
		System.out.println("Enter Packet Inter Arrival");
		int I = scanner.nextInt();
		System.out.println("Enter Arrival Times of Packets (Enter non integer value at end)");
		while (scanner.hasNextInt()) {
			arrivalTimes.add(scanner.nextInt());
		}
		int LCT = arrivalTimes.first();
		int X = 0;
		for (Integer t : arrivalTimes) {
			int temp = X - (t - LCT);
			if (temp > L) {
				System.out.println("Packet at time " + t + " is Non Conforming");
			} else {
				X = temp + I;
				LCT = t;
				System.out.println("Packet at time " + t + " is Conforming");
			}
		}
	}
}// 6->4->1 2 3 5 6 8 11 12 13 15 19 q