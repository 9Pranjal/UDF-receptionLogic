function getVisitorDetails() {
    let name = prompt("enter your name:");
    while (name === "") {
        alert("please enter your name.");
        name = prompt("Enter your name:");
    }
    let purpose = prompt("Enter your purpose {-meeting -delivery -interview } :").toLowerCase();
    return { name, purpose };
}

function validatePurpose(purpose) {
    const validPurposes = ["meeting", "delivery", "interview"];
    return validPurposes.includes(purpose);
}

function handleVisitor(name, purpose) {
    alert(`welcome ${name} ! Your purpose: ${purpose}`);
}

let visitorCount = 0;
let exit = false;

while (!exit) {
    let attempts = 0;
    let { name, purpose } = getVisitorDetails();

    while (!validatePurpose(purpose)) {
        attempts++;
        if (attempts >= 3) {
            alert("please try again later");
            break;
        }
        alert("invalid purpose");
        purpose = prompt("enter your purpose  {-meeting -delivery -interview } :").toLowerCase();
    }

    if (validatePurpose(purpose)) {
        handleVisitor(name, purpose);
        visitorCount++;
    }
    
    exit = prompt("enter 'exit' to stop or press any key to continue:").toLowerCase() === "exit";
}

alert(`total visitors today: ${visitorCount}`);
