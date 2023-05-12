import GetCustomer from "./scenarios/Get-Customer.js";
import { group, sleep } from 'k6';


export default () => {
    group('API', () => {
        GetCustomer();
    });

    sleep(1);
}