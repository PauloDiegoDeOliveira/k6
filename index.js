import GetCustomer from "./scenarios/Get-Customer.js";
import { group, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"


export default () => {
    group('API', () => {
        GetCustomer();
    });

    sleep(1);
}

export function handleSummary(data) {
    return {
        "resultados.html": htmlReport(data),
    }
};
