package com.Auto.App.Entity.User;

public enum Role {
    Admin("Admin"),
    User("User"),;

    private String role;

    Role(String _role) {
        this.role = _role;
    }

    public String getRole() {
        return role;
    }
}
