package com.itgh.dao.Impl;

import com.itgh.dao.UserDao;
import com.itgh.domain.User;

import java.util.List;
import java.util.Map;
import java.util.Properties;

public class UserDaoImpl implements UserDao {
    public void setStrList(List<String> strList) {
        this.strList = strList;
    }

    public void setUserMap(Map<String, User> userMap) {
        this.userMap = userMap;
    }

    public void setProperties(Properties properties) {
        this.properties = properties;
    }

    private List<String> strList;
    private Map<String, User> userMap;
    private Properties properties;

    public UserDaoImpl() {

        System.out.println("UserDalIml创建....");
    }

    public void save() {
        /*System.out.println(username + "===========" + age);*/
        System.out.println(strList);
        System.out.println(userMap);
        System.out.println(properties);
        System.out.println("save running...1");
    }


    public void setUsername(String username) {
        this.username = username;
    }

    public void setAge(int age) {
        this.age = age;
    }

    /*
     * 创建2方法 有个用来创建 一个用来小虎
     * */
   /* public void init()
    {
        System.out.println("初始化方法");
    }

    public void destory()
    {
        System.out.println("销毁方法");
    }*/
    private String username;
    private int age;

}
