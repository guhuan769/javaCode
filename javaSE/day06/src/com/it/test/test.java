package com.it.test;

public class test {
    public static void main(String[] args) {
        //1.定义数组
        int[] arr = {11,23,55,66,112,3,1};
        printArr(arr);
    }

    public static  void printArr(int[] arr)
    {
       for (int i = 0;i < arr.length;i++)
        {
            System.out.print(arr[i] + ",");
        }
    }
}
