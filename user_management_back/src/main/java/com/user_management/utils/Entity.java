package com.user_management.utils;

import static com.user_management.utils.Constant.PAGELIMIT;

public class Entity {
    private Integer page;
    private Integer limit=PAGELIMIT;
    private String keyword;

//    public Entity(Integer page, Integer limit) {
//        this.page = page;
//        this.limit = limit;
//    }

    public Integer getPage() {
        return page;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}
