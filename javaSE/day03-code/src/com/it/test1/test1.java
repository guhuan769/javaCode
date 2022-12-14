package com.it.test1;

import java.util.Arrays;
import java.util.Scanner;

public class test1 {
    public static void main(String[] args) {
        //键盘录入一个三位数，获取其中个位，十位，百位

        //1.键盘录入

        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个三位数");
        int number = sc.nextInt();

        //2.获取个位十位百位
        //公式:
        //个位：数字%10
        //十位：数字/10%10
        //百位: 数字/10/10%10
        //百位: 数字/10/10%10
        int ge =number%10;
        int shi = number/10%10;
        int bai = number /100 %10;
        System.out.println(ge+"-"+shi+"-"+bai);

        System.out.println(true^true);
        int[] i = new int[]{150,210,1165};
        System.out.println(256>>2);

    }
}
