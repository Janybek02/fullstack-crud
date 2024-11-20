package com.example.back_data.utils;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;
import javax.imageio.ImageIO;
public class PersonUtils {


    public static byte[] compressImage(byte[] image) {
        Deflater deflater = new Deflater();
       deflater.setLevel(deflater.DEFLATED);
       deflater.setInput(image);
       deflater.finish();
       ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
       byte[] buffer = new byte[1024];
       while (!deflater.finished()) {
           int count = deflater.deflate(buffer);
           outputStream.write(buffer, 0, count);

       }
       try {
           outputStream.close();
       } catch (IOException e) {
           throw new RuntimeException(e);
       }
       return outputStream.toByteArray();
    }
    public static byte[] decompressImage(byte[] image) {
        Inflater inflater = new Inflater();
        inflater.setInput(image);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);

            }
            outputStream.close();
        } catch (DataFormatException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return outputStream.toByteArray();

    }
}
