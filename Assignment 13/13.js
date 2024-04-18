// HR1

let HR1 = [
    {
        "firstName" : "Sam",
        "department" : "Tech",
        "designation": "Manager",
        // integer requires no quotation
        "salary": 40000,
        "raiseEligible": true,
        
    },
    {
        "firstName" : "Mary",
        "department" : "Finance",
        "designation": "Trainee",
        // integer requires no quotation
        "salary": 18500,
        "raiseEligible": true,
        
    },
    {
        "firstName" : "Bill",
        "department" : "HR",
        "designation": "Executive",
        // integer requires no quotation
        "salary": 21200,
        "raiseEligible": false,
        
    }
];

console.log(HR1);

//HR 2

const HR2 = {
        "companyName": "Tech Stars",
        "website": "www.techstars.site",
        "employees": HR1
    }

console.log(HR2);

//HR3

const Anna = {
    
    "firstName" : "Anna",
    "department" : "Tech",
    "designation": "Executive",
    // integer requires no quotation
    "salary": 25600,
    "raiseEligible": false,
        
};

HR2.employees.push(Anna);

console.log(HR2);

//HR4

function calcSalary(json) {
    let totalSalary = 0
    for(let i = 0; i < json.employees.length; i++){
        totalSalary += json.employees[i].salary;

    }
    console.log(totalSalary);
};

calcSalary(HR2);
 
//HR5

function giveRaises(json) {
    for(let i = 0; i < json.employees.length; i++){
        if(json.employees[i].raiseEligible){
            json.employees[i].raiseEligible = false;
            json.employees[i].salary += json.employees[i].salary * 0.1;
        }

    }
}
giveRaises(HR2);
console.log(HR2);

//HR6


function workFromHome(json){
    const workingFromHome = ["Anna", "Sam"]
    for(let i = 0; i < json.employees.length; i++){
        for(let j = 0; j < workingFromHome.length; j++){
            json.employees[i].wfh = false;
            if(json.employees[i].firstName === workingFromHome[j]){
                json.employees[i].wfh = true;
            }
        }
    }
}
workFromHome(HR2);
console.log(HR2);