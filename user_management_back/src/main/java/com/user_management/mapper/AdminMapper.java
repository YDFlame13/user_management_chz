package com.user_management.mapper;

import com.user_management.model.Admin;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminMapper {

    //通过用户名查询（登录）
    Admin selectByUsername(String username);

    //添加管理员用户（注册）
    int insertSelective(Admin record);

    //通过用户名更新管理员用户（修改密码）
    int updateByUsernameSelective(Admin record);

    //通过用户名删除管理员用户（注销）（可选）
    int deleteByUsername(String username);
}
