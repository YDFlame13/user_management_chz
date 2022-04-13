package com.user_management.model;

public class AdminToken {
    private Integer id;

    private Integer adminid;

    private String token;

    private Long buildtime;

    public AdminToken() {
        this.id = null;
        this.adminid = null;
        this.token = null;
        this.buildtime = null;
    }

    public AdminToken(Integer id, Integer adminid, String token, Long buildtime) {
        this.id = id;
        this.adminid = adminid;
        this.token = token;
        this.buildtime = buildtime;
    }

    public AdminToken(Integer adminid, String token, Long buildtime) {
        this.id=null;
        this.adminid = adminid;
        this.token = token;
        this.buildtime = buildtime;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAdminid() {
        return adminid;
    }

    public void setAdminid(Integer adminid) {
        this.adminid = adminid;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getBuildtime() {
        return buildtime;
    }

    public void setBuildtime(Long buildtime) {
        this.buildtime = buildtime;
    }

    @Override
    public String toString() {
        return "AdminToken{" +
                "id=" + id +
                ", adminid=" + adminid +
                ", token='" + token + '\'' +
                ", buildtime=" + buildtime +
                '}';
    }
}