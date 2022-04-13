package com.user_management.service;

import com.user_management.model.Admin;

public interface AdminService {

    //根据名字查询管理员
    Admin selectByUsername(String username);

    //登录
    String login(Admin admin);

    //注册
    String register(Admin admin);

    //修改密码
    boolean updatePassword(Admin admin);
}
