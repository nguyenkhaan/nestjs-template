// import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { MinioService } from "../minio/minio.service";
import { Express } from "express";
@Injectable() 
export class CustomerService 
{
    constructor(
        // private readonly prismaService : PrismaService,  
        private readonly minioService : MinioService
    ) {} 
    async uploadImages(file : Express.Multer.File) 
    {
        try 
        {
            const results = await this.minioService.uploadFile(file) 
            console.log("File name: " , results) 
            return results
        } 
        catch (err) 
        {
            console.log("upload file error" , err) 
            throw err 
        }
    }
    async getAllCustomers() 
    {
        try  
        {
            console.log("Hello world") 
        } 
        catch (err) 
        {
            console.log("Get customer error" , err) 
            throw err 
        }
    }
}