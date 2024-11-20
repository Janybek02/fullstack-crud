package com.example.back_data.entity;

public class ImageUploadResponse {
    private String massage;


    public ImageUploadResponse(String massage) {
        this.massage = massage;
    }
    public String getMassage() {
        return massage;
    }

    public void setMassage(String massage) {
        this.massage = massage;
    }
}
