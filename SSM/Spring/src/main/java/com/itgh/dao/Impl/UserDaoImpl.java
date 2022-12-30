package com.itgh.dao.Impl;

import com.itgh.dao.UserDao;

import java.nio.file.ClosedWatchServiceException;

public class UserDaoImpl implements UserDao {
    public UserDaoImpl() {
        System.out.println("UserDalIml创建....");
    }

    public void save() {
        System.out.println("save running...1");
    }

    /*
    * 创建2方法 有个用来创建 一个用来小虎
    * */
    public void init()
    {
        System.out.println("初始化方法");
    }

    public void destory()
    {
        System.out.println("销毁方法");
    }

}
