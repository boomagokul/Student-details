var student = [
    {
        'roll_no': 1,
        "name": "Booma",
        "percentage": 90,
        "grade": "A"
    },
    {
        "roll_no": 2,
        "name": "gokul",
        "percentage": 82,
        "grade": "A"
    },
    {
        "roll_no": 3,
        "name": "yazhu",
        "percentage": 78,
        "grade": "B"
    },
    {
        "roll_no": 4,
        "name": "harshu",
        "percentage": 60,
        "grade": "B"
    },
    
    {
        "roll_no": 5,
        "name": "SRI",
        "percentage": 67,
        "grade": "B"
    }
]


function allstudent() {
    var newTr = "";

    for (var i = 0; i < student.length; i++) {
        newTr += `<tr>
        <td>${student[i].roll_no}</td>
        <td> ${student[i].name}</td>
        <td>${student[i].percentage}</td>
        <td>${student[i].grade}</td></tr>`;
    }
    document.getElementById('data').innerHTML = newTr;
}

function grade() {
    var grd = "";

    for (var i = 0; i < student.length; i++) {
        if (student[i].percentage > 80)
        {
             grd += `<tr>
            <td>${student[i].roll_no}</td>
            <td> ${student[i].name}</td>
            <td>${student[i].percentage}</td>
            <td>${student[i].grade}</td>`;
        }
    }
    document.getElementById('data').innerHTML = grd;
}

function gradeB() {
    var grd = "";

    for (var i = 0; i < student.length; i++) {
        if (student[i].percentage < 80)
        {
            grd += `<tr>
            <td>${student[i].roll_no}</td>
            <td> ${student[i].name}</td>
            <td>${student[i].percentage}</td>
            <td>${student[i].grade}</td>`;
        }
    }
    document.getElementById('data').innerHTML = grd;
}