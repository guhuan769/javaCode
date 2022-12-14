package com.it.arithmeticoperator;

public class ArithmeticoperatorDemo1 {
    public static void main(String[] args) {
        //+
        System.out.println(3+2);
        //-
        System.out.println(3-1);
        //*
        System.out.println(2*2);
        // /
        System.out.println(10/3);
        // %
        System.out.println(10%3);
        //如果在计算的时候有小数参与
        //结论:
        //在代码中如果有小数参与计算，结果有可能补精确的
        System.out.println(1.1+1.01);
        System.out.println(1.1-1.01);
    }
}
