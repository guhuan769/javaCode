package main.java.com.itgh.Impl;

import main.java.com.itgh.UserDao;

public class UserDaoImpl implements UserDao {
    @Override
    public void save() {
        System.out.println("Save Running....");
    }
}
