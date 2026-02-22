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


function calulateBasePay(rate, hours) {
    for (job of employee) {
    let restrictedHours = job.hoursWorked
    if (restrictedHours > 40)
        restrictedHours = 40
    let basePay = restrictedHours * job.hourlyRate
    console.log(basePay)
    }
}


calulateBasePay(employee.hourlyRate, employee.hoursWorked)
