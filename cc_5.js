let employee = [ // [name, hourlyRate, hoursWorked]
    {name: "Twilight Sparkle", hourlyRate: 102, hoursWorked: 65},
    {name: "Spike", hourlyRate: 84, hoursWorked: 26},
    {name: "Owlowiscious", hourlyRate: 68, hoursWorked: 40}
]


function employeeList(write) {
    employee.forEach(item => {
        const name = item.name
        const rate = item.hourlyRate
        const hours = item.hoursWorked

        console.log(`Name: ${name} | Rate: ${rate} | Hours: ${hours}`)
    }
    )
}

employeeList(employee)

console.log("       ")

function calulateBasePay(rate, hours) {
    for (job of employee) {
    let restrictedHours = job.hoursWorked
    if (restrictedHours > 40)
        restrictedHours = 40
    let basePay = restrictedHours * job.hourlyRate
    storeBasePay.push (basePay)
    console.log(`${job.name}: $${basePay}`)
    }
}

let storeBasePay = []

calulateBasePay(employee.hourlyRate, employee.hoursWorked)

console.log("       ")

function calulateOvertimePay(rate, hours) {
    for (job of employee) {
    let overtimeHours = job.hoursWorked
    if (overtimeHours > 40)
        overtimeHours -= 40
    else overtimeHours = 0
    let overtimePay = overtimeHours * (job.hourlyRate * 1.5)
    storeOvertimePay.push (overtimePay)
    console.log(`${job.name}: $${overtimePay}`)
    }
}

let storeOvertimePay = []

calulateOvertimePay(employee.hourlyRate, employee.hoursWorked)

//console.log(storeBasePay)
//console.log(storeOvertimePay)

function calculateTotals(base, overtime) {
    for (let i = 0; i < storeBasePay.length; i++) {
    let grossPay = (storeBasePay[i] + storeOvertimePay[i])
    storeGrossPay.push (grossPay)
    }

}

let storeGrossPay = []

calculateTotals(storeBasePay, storeOvertimePay)

console.log("       ")

function calculateTaxes(grossPay) {
    for (gross of storeGrossPay) {
    let afterTax = gross * (1 - .15)
    storeTotalPay.push (afterTax.toFixed(2))
    console.log(`$${afterTax.toFixed(2)}`)
    }
}

let storeTotalPay = []

calculateTaxes(storeGrossPay)

console.log("       ")

function processPayroll(employee) {

    
}