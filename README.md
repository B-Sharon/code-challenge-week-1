# Code Challenge Week 1

#### Date: 2024/03/22

#### By *Sharon Byegon*

## Project setup
The technologies used in this project are Github and Javascript.
To run any of the snippets from the code-challenge-week-1 repository, follow the steps below:
1.Clone the repository: git clone https://github.com/B-Sharon/code-challenge-week-1.git , on your terminal.
2.Change directory to that of the cloned repository.
3.Open the project with your preferred text editor or IDE.
4.Edit and run the code as required.
*Note that these steps are general and may vary depending on your preference and machine setup.*



# Challenge 1:  Student Grade Generator
## Description
This is a program that is used to implement a student grade generator. It prompts the user to input student marks and determines the corresponding letter grade based on the grading scale below:
Grading Scale:
        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

## Implementation
1.Prompt the user to enter the student's marks. 
2.Once the input has been received, it checks whether the input is valid (valid input must be within the range of 0 - 100). If the input is invalid the user is prompted to re-enter the value.
3.A function is used to determine the letter grade based on the grading scale mentioned above.
4.Once the letter grade has been determined, the result is then displayed.

Below is an example of the output to be displayed :

    Hello student, please enter your marks:56
    Your grade is: C




# Challenge 2:  Speed Detector

## Description
This is a program that is used to simulate a speed detection system. The input is the speed of the car. Once the speed of the car is known then the program determines whether the driver is either driving within the speed limit or if they have exceeded the speed limit. If they have exceeded the speed limit then they are awarded demerit points. When the demerit points exceed 12 points then the driver's license is suspended.

## Implementation
1.Prompt the user to input the speed of the car.
2.The input is passed as a parameter in the speedGenerator function. The speedGenerator function first checks whether the input has exceeded the speed limit which in this case is 70km/s.
1. If the input(car's speed) is within the speed limits then the program outputs a message indicating that the driver is ok.
2. If the car's speed exceeds the speed limit then the function calculates demerit points based on how much the speed surpasses the limit. 
3. Demerit points are assigned at a rate of one point for every 5km/s above the 70km/s limit.

3.The program outputs a message indicating the driver's demerit points. If the demerit points exceed 12 points then the program warns the driver of license suspension.

Below is an example of the output displayed :
```
    Enter the speed of the car: 56
    OK
    Enter the speed of the car: 120
    Demerit points: 10
    Enter the speed of the car: 140
    License Suspended.
```

# Challenge 3: Net Salary Calculator

## Description
This is program develops that calculates a Kenyan individual's monthly net salary g after accounting for deductions such as PAYE(Paye As You Earn) Tax, NHIF(National Hospital Insurance Fund) deductions. NSSF(National Social Security Fund)deductions. The user is required to give the amount of basic salary plus benefits they earn per month. The program calculates also calculates the gross salary of the individual.
*Note that the paramaters used to calculate PAYE, NHIF and NSSF were those in effect on March 2024.*


## Implementation
1.Prompt the user to enter their basic salary.
2.Calculate the gross salary by adding the basic salary and benefits.
3.A function to calculate NHIF is implemented based on the NHIF rate and salary tier of the individual's gross salary. 
4.A function to calculate NSSF is implemented based on the NSSF rate and salary tier of the individual's basic salary. The NSSF rates are divided into two tiers:
1. Tier1: This is a compulsory deduction based on the product of the basic salary and the tier rate of 6%. 
2. Tier2: This tier is dependent on whether the individual contributes money to the pension scheme and if their employer has opted IN or OUT of tier2 rate.

5.A function to calculate the individual's PAYE is implemented based on the following parameters:
1. It assigns the output of the NSSF deductions as the individual's contribution benefit.
2. It calculates the amount of taxable pay which is the difference between the individual's gross salary and contribution benefits.
3. Another function is used to to implement the first PAYE parameter based on the PAYE rate and salary tier.
4. Assigns the individual the fixed amount of personal relief.
5. Another function is used to implement the amount of insurance relief the individual gets. This is based on the monthly premium the user pays and the given rates.
6. Another function is used to implement the amount of mortgage relief the individual gets. This is based on the monthly mortgage premium the user pays and the given rates.
7. Another function is used to implement the amount of disability exemption the individual gets if they have a disability exemption certificate.
8. Another function is used to implement the amount of allowable owner occupier interest relief the individual gets if they have a home ownership saving's plan. This is based on the monthly home ownership total deposit and the given rates.
*The individual's monthly PAYE tax will be the difference between the taxable pay and the different parameters ie personal relief, insurance relief, mortgage relief, disability exemption and the allowable owner occupier interest relief.*

6.Calculates the net salary by subtracting the PAYE tax, NHIF deductions and NSSF deductions from the gross salary.
7.Displays the gross salary, PAYE, NHIF deductions, NSSF deductions and net salary.



Below is an example of the output displayed :
```
    Enter the amount of your monthly basic salary: 30000
    Enter the total amount of your monthly benefits: 4000
    Do you have a disability exemption certificate? (yes/no): no
    Do you have a mortgage? (yes/no): no
    Do you have a life insurance policy? (yes/no): no
    Do you have a home ownership savings plan? (yes/no): no
    Your PAYE deduction is: 2,050
    Your NHIF deduction is: 900
    Your NSSF deduction is: 1,800
    Your monthly gross salary is: 34,000
    Your net salary is: 29,010
```



## Installation
You use git clone to be able to download the documents in the GitHub

### Installation instruction
```
Git clone https://github.com/B-Sharon/code-challenge-week-1.git

```

# Live Link
[Git](gh-pages link)

## Technologies used
Github
Javascript

## Support and contact details
github.com/B-Sharon

### License
The content of this site is licensed under the MIT license
Copyright (c) 2024.
