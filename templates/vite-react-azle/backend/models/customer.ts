import { Record, Vec, blob, int64, text } from "azle";


export type Customer = Record<{

    id:text,
    fullname:text,
    dob:text,
    gender:text,
    address:text,
    phone:text,
    nationalIdNumber:text,
    facialRecognition:text,
    nationalIdPic:text,
    passport:text

}>

export type CustomerPayload = Record<{

    
    fullname:text,
    dob:text,
    gender:text,
    address:text,
    phone:text,
    nationalIdNumber:text,
    facialRecognition:text,
    nationalIdPic:text,
    passport:text

}>



