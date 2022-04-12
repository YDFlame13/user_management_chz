package com.user_management.mapper;

import com.user_management.model.Student;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StudentMapper {

    //添加
    int insertSelective(Student record);

    //通过id删除
    int deleteByPrimaryKey(Integer id);

    //通过id修改
    int updateByPrimaryKeySelective(Student record);

    //遍历
    List<Student> selectAll();

    //通过姓名模糊查询
    List<Student> selectByKeyword(String keyword);
}