package com.itgh.service.impl;

import com.itgh.dao.UserDao;
import com.itgh.service.UserService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UserServiceImpl implements UserService {

    private UserDao userDao;

    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    public UserServiceImpl() {
        this.userDao = userDao;
    }
    /*   public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }*/


    @Override
    public void save() {
        userDao.save();
    }
}
