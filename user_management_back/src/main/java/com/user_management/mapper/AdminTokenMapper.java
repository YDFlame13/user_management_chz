package com.user_management.mapper;

import com.user_management.model.AdminToken;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminTokenMapper {

    //添加AdminToken
    int insertSelective(AdminToken record);

    //通过adminid删除AdminToken
    int deleteByAdminid(Integer adminid);

    //通过adminid修改AdminToken
    int updateByAdminidSelective(AdminToken record);

    //通过adminid查询AdminToken
    AdminToken selectByAdminid(Integer adminid);
}