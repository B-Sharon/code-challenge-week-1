//Tasks
/*  1. Calculate an individual's net salary by getting the inputs of basic salary and benefits.
    2. calculate the PAYE, NHIFDeductions, NSSFDeductions, gross salary and net salary.
*/

// calculating the netSalary per month


//prompting the user to input the basic salary & using the method Number() to ensure the value is a number
const prompt = require("prompt-sync")({ sigint: true });
let basicSalary = Number(prompt("Enter the amount of your monthly basic salary: "));

//prompting the user to input the benefits  & using the method Number() to ensure the value is a number
let benefits = Number(prompt("Enter the total amount of your monthly benefits: "));

//calculating the gross salary
let grossSalary = basicSalary + benefits;

//function to calculate the NHIF Deductions 
    function calculateNhifDeductions(grossSalary){
        if(grossSalary <= 5999){
            return 150;
        }
        else if(grossSalary >= 6000 && grossSalary <= 7999){
            return 300;
        }
        else if(grossSalary >= 8000 && grossSalary <= 11999){
            return 400;
        }
        else if(grossSalary >= 12000 && grossSalary <= 14999){
            return 500;
        }
        else if(grossSalary >= 15000 && grossSalary <= 19999){
            return 600;
        }
        else if(grossSalary >= 20000 && grossSalary <= 24999){
            return 750;
        }
        else if(grossSalary >= 25000 && grossSalary <= 29999){
            return 850;
        }
        else if(grossSalary >= 30000 && grossSalary <= 34999){
            return 900;
        }
        else if(grossSalary >= 35000 && grossSalary <= 39999){
            return 950;
        }
        else if(grossSalary >= 40000 && grossSalary <= 44999){
            return 1000;
        }
        else if(grossSalary >= 45000 && grossSalary <= 49999){
            return 1100;
        }
        else if(grossSalary >= 50000 && grossSalary <= 59999){
            return 1200;
        }
        else if(grossSalary >= 60000 && grossSalary <= 69999){
            return 1300;
        }
        else if(grossSalary >= 70000 && grossSalary <= 79999){
            return 1400;
        }
        else if(grossSalary >= 80000 && grossSalary <= 89999){
            return 1500;
        }
        else if(grossSalary >= 90000 && grossSalary <= 99999){
            return 1600;
        }
        else{
            return 1700;
        }
    }


function calculateNssfDeductions(basicSalary ){
    //calculating the values for the different tiers.
    //tier 1 deduction is compulsory for everyone
    let tier1Deduction = 0.06 * 7000;
    //assuming the employer has not opted out of tier 2 deductions
    let tier2Deduction;
    if (basicSalary < 36000){
        tier2Deduction = (basicSalary -7000) * 0.06;
    }
    
    else {
        tier2Deduction = (36000 - 7000) * 0.06;
    }
    
    return tier1Deduction + tier2Deduction;
} 
 

//function to calculate the PAYE

function calculatePaye(grossSalary){
    //value of contribution benefit is the value of the nssf deductions
    let contributionBenefit = calculateNssfDeductions(basicSalary);

     //calculating the taxable pay
    let totalDeductions = 0;//this will be applicable when calculating the disability and mortgage allowances
    let taxablePay =  grossSalary - contributionBenefit - totalDeductions;
   
    

    //calculating monthly PAYE rates based on the KRA provided salary scale
    let payeScaledAmount = 0;
    function payeRates (payeScaledAmount){

        if (taxablePay <= 24000){
            payeScaledAmount = taxablePay * 0.1;
            return payeScaledAmount;
        }
        else if (taxablePay > 24000 && taxablePay <= 32333){
            payeScaledAmount = (24000 * 0.1) + ((taxablePay - 24000) * 0.25);
            return payeScaledAmount;
        }
        else if (taxablePay > 32333 && taxablePay <= 500000){
            payeScaledAmount = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((taxablePay - 32333) * 0.3);
            return payeScaledAmount;
        }
        else if (taxablePay > 500000 && taxablePay <= 800000){
            payeScaledAmount = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.3) + ((taxablePay - 500000) * 0.325);
            return payeScaledAmount;
        }
        else (taxablePay > 800000);
        {
            payeScaledAmount = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.3) + ((800000 - 500000) * 0.325) + ((taxablePay - 800000) * 0.35);
            return payeScaledAmount;
        }
        
    }

    //other PAYE parameters
 // disability exemption parameter
let disabilityExemption = 0;
//prompt the user to find out if they have a disability insurance policy
let disabilityExemptionCertificate = prompt("Do you have a disability exemption certificate? (yes/no): ");
if(disabilityExemptionCertificate === "yes"){
    if(grossSalary > 150000){
         disabilityExemption = 0;
         totalDeductions = 150000;
         taxablePay -= totalDeductions;
         disabilityExemption = payeRates(payeScaledAmount);
         console.log(disabilityExemption);
        
    }
    else{
        disabilityExemption = 0;
        console.log(disabilityExemption)
    }
}
else
{
    disabilityExemption = 0;
}    
    
//calculate the allowable owner occupier interest
let mortgageRelief = 0;
//ask the user if they have a mortgage
let mortgage = prompt("Do you have a mortgage? (yes/no): ");
if(mortgage === "yes"){
    //prompt the user to input their mortgage premium
    let mortgageInterest = Number(prompt("How much premium do you pay per month? "));
    totalDeductions = Math.min(mortgageInterest, 25000);
    taxablePay = taxablePay - totalDeductions;
    mortgageRelief = payeRates(payeScaledAmount);
}



 //insurance relief parameter
let insuranceRelief = 0;
function calculateInsuranceRelief(insuranceRelief){
     //prompt the user to find out if they have a life insurance policy
     let lifeInsurancePolicy = prompt("Do you have a life insurance policy? (yes/no): ");
     if(lifeInsurancePolicy === "yes"){
         //prompt the user to input their insurance premium
         let insurancePremium = Number(prompt("How much premium do you pay per month? "));
         insurancePremium = insurancePremium * .15;
         if(insurancePremium < 5000){
             insuranceRelief = insurancePremium;
             return insuranceRelief;
         }
         else{
             insuranceRelief = 5000;
             return insuranceRelief;
         }
     }
     else if(lifeInsurancePolicy === "no"){
         insuranceRelief = 0;
         return insuranceRelief;
     }
 }
 
 //Calculating the allowable HOSP contrribution
let allowableHospContribution = 0;
function calculateAllowableHospContribution(allowableHospContribution){
     //prompt the user to find out if they have a home ownership savings plan
     let homeOwnershipSavingsPlan = prompt("Do you have a home ownership savings plan? (yes/no): ");
     //console.log(homeOwnershipSavingsPlan);
     if(homeOwnershipSavingsPlan === "yes"){
         //Home Ownership Total Deposit
         //since 2021 Allowable HOSP Contribution limit is 0
         let homeOwnershipTotalDeposit = Number(prompt("How much is your home ownership total deposit? "));
         allowableHospContribution = homeOwnershipTotalDeposit;
         allowableHospContribution = 0;
         return allowableHospContribution;
     }   
     
     else if(homeOwnershipSavingsPlan === "no"){
         allowableHospContribution = 0;
         return allowableHospContribution;
     }
 }



//everyone is entitled to personal relief of 2400
let personalRelief = 2400;

//calculate the total amount of PAYE tax an individual pays
let kraPayeAmount = payeRates(payeScaledAmount) - disabilityExemption - mortgageRelief  - calculateInsuranceRelief(insuranceRelief) - calculateAllowableHospContribution(allowableHospContribution) - personalRelief;;
return kraPayeAmount;


}



//calculating the net salary
function calculateNetSalary(grossSalary) {
    let nhif = calculateNhifDeductions(grossSalary);
    let nssf = calculateNssfDeductions(grossSalary);
    let paye = calculatePaye(grossSalary);

    return grossSalary - nhif - nssf -paye;
}


//logging the outputs
console.log("Your PAYE deduction is: " + calculatePaye(grossSalary).toLocaleString());
console.log("Your NHIF deduction is: " + calculateNhifDeductions(grossSalary).toLocaleString());
console.log("Your NSSF deduction is: " + calculateNssfDeductions(basicSalary).toLocaleString());
console.log("Your monthly gross salary is: " + grossSalary.toLocaleString());
console.log("Your net salary is: " + calculateNetSalary(grossSalary).toLocaleString());