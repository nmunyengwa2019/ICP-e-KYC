import { $query, $update, Result, StableBTreeMap, nat } from 'azle';
//import { createCustomer } from './business_logic/customersLogic';
import { Customer, CustomerPayload } from './models/customer';
// This is a global variable that is stored on the heap
let counter : nat = BigInt(0);

const customerStrorage = new StableBTreeMap<string, Customer>(0, 44, 1024);

// Query calls complete quickly because they do not go through consensus
$query;
export function get(): nat {
    return counter;
}

// Update calls take a few seconds to complete
// This is because they persist state changes and go through consensus
$update;
export function add(n : nat): nat {
    counter += n; //
    return counter;
}
$update
export function createCustomer(customer: CustomerPayload): Result<Customer,string>{
    const cust:Customer = {
        id:"jsjs",
        ...customer
    } 

    customerStrorage.insert(cust.id,cust);
    return Result.Ok(cust);
}


//createCustomer;


$update;
export function inc(): nat {
    counter += BigInt(1);
    return counter
}

