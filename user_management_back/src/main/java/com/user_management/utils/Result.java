package com.user_management.utils;

public class Result {
    //200:成功 400:客户端错误 500:服务器错误
    private int status;
    private String message;
    private Object body;

    public static class LoginBody {
        String token;

        public LoginBody(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }

    public Result() {
        this.status = 0;
        this.message = null;
        this.body = null;
    }

    public Result(int status, String message, Object body) {
        this.status = status;
        this.message = message;
        this.body = body;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getBody() {
        return body;
    }

    public void setBody(Object body) {
        this.body = body;
    }

    @Override
    public String toString() {
        return "Result{" +
                "status=" + status +
                ", message='" + message + '\'' +
                ", body=" + body +
                '}';
    }
}
