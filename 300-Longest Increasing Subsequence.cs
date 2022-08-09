/**
 * Problem link: https://leetcode.com/problems/longest-increasing-subsequence
 * Longest Increasing Subsequence
 *
 * Solution: DP, Binary Search
 */

/**
 * O (nlogn) 126 ms 38 MB
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

namespace Algorithms
{
    public class LongestIncreasingSubsequence
    {
        public static void Main()
        {
            int[] nums1 = { 3, 10, 2, 1, 20 }; // 3
            int[] nums2 = { 3, 2 }; // 1
            int[] nums3 = { 50, 3, 10, 7, 40, 80 }; // 4
            int[] nums4 = { 10, 9, 2, 5, 3, 7, 101, 18 }; // 4
            int[] nums5 = { 0, 1, 0, 3, 2, 3 }; // 4
            int[] nums6 = { 7, 7, 7, 7, 7, 7, 7 }; // 1

            Console.WriteLine("O N LogN 1: " + LengthOfLIS(nums5));
        }

        /**
         * 1. If A[i] is smallest among all end candidates of active lists, we will start new active list of length 1.
         * 2. If A[i] is largest among all end candidates of active lists, we will clone the largest active list, and extend it by A[i].
         * 3. If A[i] is in between, we will find a list with largest end element that is smaller than A[i].
         * Clone and extend this list by A[i].
         * We will discard all other lists of same length as that of this modified list.
         * Active list: end element of smaller list is smaller than end elements of larger lists
         */
        public int LengthOfLIS(int[] nums)
        {
            int size = nums.Length;
            int[] list = new int[size];
            int len = 1;
            list[0] = nums[0];

            for (int i = 1; i < size; i++)
            {
                if (nums[i] < list[0])
                {
                    list[0] = nums[i];
                }
                else if (nums[i] > list[len - 1])
                {
                    list[len++] = nums[i];
                }
                else
                {
                    list[CeilIndexToInsert(list, -1, len - 1, nums[i])] = nums[i];
                }
            }

            return len;
        }

        public int CeilIndexToInsert(int[] List, int low, int high, int key)
        {
            while(high - low > 1)
            {
                int mid = low + ((high - low)>>1); // divide by 2
                if (List[mid] >= key)
                {
                    high = mid;
                } else
                {
                    low = mid;
                }
            }

            return high;
        }
    }
}
