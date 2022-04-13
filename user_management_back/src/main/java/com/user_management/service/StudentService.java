package com.user_management.service;

import com.github.pagehelper.PageInfo;
import com.user_management.model.Student;
import com.user_management.utils.Entity;

import java.util.List;

public interface StudentService {

    //添加学生
    boolean studentAdd(Student student);

    //删除学生
    boolean studentDelete(Integer id);

    //修改学生信息
    boolean studentUpdate(Student student);

    //按姓名模糊查询学生
    PageInfo<Student> studentFind(Entity entity);

    //遍历学生
    PageInfo<Student> studentAll(Entity entity);
}
