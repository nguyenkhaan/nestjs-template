import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import type { Express } from "express";
import { FileInterceptor } from '@nestjs/platform-express';
import { CustomerService } from "./customer.service";
@Controller("customer") 
export class CustomerController 
{
    constructor(
        private readonly customerService : CustomerService
    ) {} 
    @Post() 
    @UseInterceptors(FileInterceptor('data'))
    async uploadImage(
        @UploadedFile() file: Express.Multer.File 
    ) 
    {
        const results = await this.customerService.uploadImages(file) 
        return results
    }
}