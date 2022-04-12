package com.user_management.model;

import java.util.Date;

public class Student {
    private Integer id;

    private String name;

    private String password;

    private String email;

    private Date birthday;

    private Float balance;

    public Student() {
        this.id = null;
        this.name = null;
        this.password = null;
        this.email = null;
        this.birthday = null;
        this.balance = null;
    }

    public Student(Integer id, String name, String password, String email, Date birthday, Float balance) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.birthday = birthday;
        this.balance = balance;
    }

    public Student(String name, String password, String email, Date birthday, Float balance) {
        this.id=null;
        this.name = name;
        this.password = password;
        this.email = email;
        this.birthday = birthday;
        this.balance = balance;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Float getBalance() {
        return balance;
    }

    public void setBalance(Float balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", birthday=" + birthday +
                ", balance=" + balance +
                '}';
    }
}