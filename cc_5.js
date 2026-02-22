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

console.log("       ")

function calculateOvertimePay(rate, hours) {
    let storeOvertimePay = []
    for (job of employee) {
    let overtimeHours = job.hoursWorked
    if (overtimeHours > 40)
        overtimeHours -= 40
    else overtimeHours = 0
    let overtimePay = overtimeHours * (job.hourlyRate * 1.5)
    storeOvertimePay.push (overtimePay)
    console.log(`${job.name}: $${overtimePay}`)
    }
    return storeOvertimePay
}

let storeOvertimePay = calculateOvertimePay()

//console.log(storeBasePay)
//console.log(storeOvertimePay)

function calculateTotals(base, overtime) {
    let storeGrossPay = []
    for (let i = 0; i < storeBasePay.length; i++) {
    let grossPay = (storeBasePay[i] + storeOvertimePay[i])
    storeGrossPay.push (grossPay)
    }
    return storeGrossPay
}

let storeGrossPay = calculateTotals(storeBasePay, storeOvertimePay)

console.log("       ")

function calculateTaxes(grossPay) {
    let storeTotalPay = []
    for (gross of storeGrossPay) {
    let afterTax = gross * (1 - .15)
    storeTotalPay.push (afterTax.toFixed(2))
    console.log(`$${afterTax.toFixed(2)}`)
    }
    return storeTotalPay
}

let storeTotalPay = calculateTaxes(storeGrossPay)


console.log("       ")

function processPayroll(employee,  base, overtime, gross, net) {
    let payrollObj = []
    for (let i = 0; i < employee.length; i++) {
    let payroll = {
        name: employee[i].name,
        basePay: base[i],
        overtimePay: overtime[i],
        grossPay: gross[i],
        netPay: net[i]
    }
    payrollObj.push(payroll)

    console.log(`${payroll.name}:`)
    console.log(`Base Pay: $${payroll.basePay}`)
    console.log(`Overtime Pay: $${payroll.overtimePay}`)
    console.log(`Gross Pay: $${payroll.grossPay}`)
    console.log(`Net Pay: $${payroll.netPay}`)
    console.log("       ")
    }
 return payrollObj
}

let payrollResults = processPayroll(
    employee,
    storeBasePay,
    storeOvertimePay,
    storeGrossPay,
    storeTotalPay
)