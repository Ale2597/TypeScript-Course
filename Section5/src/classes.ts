abstract class Department {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor (protected readonly id: string, public name: string) {
        // this.name = n;
        // this.id = id;
    }

    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // this.id = 'd2';
        this.employees.push(employee);
    }

    printemployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'Accounting');
        this.admins = admins;
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}


class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found...');
    }

    set mostRecentReport(value: string) {
        if (!value){
            throw new Error('Please pass in a valid value!');
        }
        this.addReports(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Manu');
it.addEmployee('Max');

// accounting.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printemployeeInformation();

console.log(it);

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

// const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReports('Something went wrong...');
console.log(accounting.mostRecentReport);


accounting.addEmployee('Manu');
accounting.addEmployee('Max');

// accounting.printReports();
// accounting.printemployeeInformation();
accounting.describe();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe };
// accountingCopy.describe();  

