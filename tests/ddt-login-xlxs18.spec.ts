import {test,expect} from '@playwright/test';
import * as XLSX from 'xlsx';

// need to install one external package 
// ------- npm install xlsx
const filePath = "file path";
const workbook = XLSX.readFile(filePath);
const sheetFirst = workbook.SheetNames[0];
const worksheetdata = workbook.Sheets[sheetFirst];

// convert worksheet data into Json
const loginData: any = XLSX.utils.sheet_to_json(worksheetdata);


// now put into test case
test.describe("login DDT",async()=>{
    for(const {email,password,validity} of loginData){
        test(`login test of ${email} and ${password}`,async({page})=>{
            console.log("follow the existing test case steps all are same now")
        });
    }
})



