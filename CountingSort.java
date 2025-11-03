import java.util.*;   // needed for Arrays and Streams

public class CountingSort {        // make class public to match file name

    static void countingSort(int[] arr) {
        int max = Arrays.stream(arr).max().getAsInt();
        int min = Arrays.stream(arr).min().getAsInt();
        int range = max - min + 1;

        int[] count = new int[range];
        int[] output = new int[arr.length];

        // Count each number’s frequency
        for (int i = 0; i < arr.length; i++) {
            count[arr[i] - min]++;
        }

        // Convert count[] to prefix sums
        for (int i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }

        // Place elements into output[] in sorted order
        for (int i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i] - min] - 1] = arr[i];
            count[arr[i] - min]--;
        }

        // Copy sorted values back into arr
        for (int i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }
    }

    public static void main(String[] args) {
        int[] arr = {4, 2, 2, 8, 3, 3, 1};
        countingSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}