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

function calculateBasePay(rate, hours) {
    let storeBasePay = []
    for (job of employee) {
    let restrictedHours = job.hoursWorked
    if (restrictedHours > 40)
        restrictedHours = 40
    let basePay = restrictedHours * job.hourlyRate
    storeBasePay.push (basePay)
    console.log(`${job.name}: $${basePay}`)
    }
    return storeBasePay
}

let storeBasePay = calculateBasePay()

function calculateOvertimePay(rate, hours) {
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

calculateOvertimePay(employee.hourlyRate, employee.hoursWorked)

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
    
    for (let i = 0; i < storeBasePay.length; i++) {
    console.log(`${employee[i].name}:`)
    console.log(`Base Pay: $${storeBasePay[i]}`)
    console.log(`Overtime Pay: $${storeOvertimePay[i]}`)
    console.log(`Gross Pay: $${storeGrossPay[i]}`)
    console.log(`Net Pay: $${storeTotalPay[i]}`)
    console.log("       ")
    }
//    (name(emp), basepay(storebase), overtimepay(storeovertime), grosspay(storegross), netpay(storetotal))
}

processPayroll(employee)