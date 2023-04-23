



window.addEventListener("load",()=>{
  const form=document.getElementById("multi-page-form")
  const first_form=document.getElementById("form-page1")
  const second_form=document.getElementById("form-page2")
  const third_form=document.getElementById("form-page3")
  const first_next_button=document.getElementById("Next-Button-1")
  const second_next_button=document.getElementById("Next-Button-2")
  const third_next_button=document.getElementById("Next-Button-3")
  const prev_button1=document.getElementById("Prev-Button-1")
  const prev_button2=document.getElementById("Prev-Button-2")
  const formContainerBox=document.getElementById("form-container-box")
  
  const formdata = {
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    email: email,
    fatherFirstName: fatherFirstName,
    fatherLastName: fatherLastName,
    motherFirstName: motherFirstName,
    motherLastName: motherLastName,
    gender: gender ? gender.value : "",
    nationality: nationality,
    homeAddress: homeAddress,
    city: city,
    country: country,
    telephoneHome: telephoneHome,
    mobile: mobile,
    hscInstitution: hscInstitution,
    hscBoard: hscBoard,
    hscScore: hscScore,
    sscInstitution: sscInstitution,
    sscBoard: sscBoard,
    sscScore: sscScore,
    currentlyPursuing: currentlyPursuing,
    currentInstitution: currentInstitution,
    overallScore: overallScore,
    currentBacklogs: currentBacklogs,
    photo: photo.src,
    hscMarksheet: hscMarksheet.src,
    sscMarksheet: sscMarksheet.src,
    semesterMarksheet: semesterMarksheet.src
  };
  
  

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
  });

  first_next_button.addEventListener("click",()=>{
    first_form.style.display="none";
    second_form.style.display="block";
  })

  second_next_button.addEventListener("click",()=>{
    second_form.style.display="none";
    third_form.style.display="block";
    
  })


  third_next_button.addEventListener("click",()=>{
    formContainerBox.style.display="none";
    const data = JSON.parse(localStorage.getItem("formData"));
    const previewDiv = document.createElement("div");
    previewDiv.innerHTML = `
      <p>Name: ${data.firstName} ${data.lastName}</p>
      <p>Date of birth: ${data.dob}</p>
      <p>Email: ${data.email}</p>
      <p>Father's name: ${data.fatherFirstName} ${data.fatherLastName}</p>
      <p>Mother's name: ${data.motherFirstName} ${data.motherLastName}</p>
      <p>Gender: ${data.gender}</p>
      <p>Nationality: ${data.nationality}</p>
      <p>Home address: ${data.homeAddress}</p>
      <p>City: ${data.city}</p>
      <p>Country: ${data.country}</p>
      <p>Telephone (home): ${data.telephoneHome}</p>
      <p>Mobile: ${data.mobile}</p>
      <p>HSC Institution: ${data.hscInstitution}</p>
      <p>HSC Board: ${data.hscBoard}</p>
      <p>HSC Score: ${data.hscScore}</p>
      <p>SSC Institution: ${data.sscInstitution}</p>
      <p>SSC Board: ${data.sscBoard}</p>
      <p>SSC Score: ${data.sscScore}</p>
      <p>Currently Pursuing: ${data.currentlyPursuing}</p>
      <p>Current Institution: ${data.currentInstitution}</p>
      <p>Overall Score: ${data.overallScore}</p>
      <p>Current Backlogs: ${data.currentBacklogs}</p>
      <p>Photo: ${data.photo}</p>
      <p>HSC Marksheet: ${data.hscMarksheet}</p>
      <p>SSC Marksheet: ${data.sscMarksheet}</p>
      <p>Semester Marksheet: ${data.semesterMarksheet}</p>
    `;
    document.body.appendChild(previewDiv);
  });
  

  prev_button1.addEventListener("click",()=>{
    first_form.style.display="block";
    second_form.style.display="none"
  })

  prev_button2.addEventListener("click",()=>{
    third_form.style.display="none";
    second_form.style.display="block"
  })



})

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const firstName = document.getElementById("name").value.trim();
  const lastName = document.getElementById("name").value.trim();
  const dob = document.getElementById("date").value.trim();
  const email = document.getElementById("Email").value.trim();
  const fatherFirstName = document.getElementById("Fathername").value.trim();
  const fatherLastName = document.getElementById("Fathername").value.trim();
  const motherFirstName = document.getElementById("Mothername").value.trim();
  const motherLastName = document.getElementById("Mothername").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const nationality = document.getElementById("Nationality").value.trim();
  const homeAddress = document.getElementById("Home").value.trim();
  const city = document.getElementById("City").value.trim();
  const country = document.getElementById("country").value;
  const telephoneHome = document.getElementById("Telephone-Home").value.trim();
  const mobile = document.getElementById("Mobile").value.trim();
  const hscInstitution = document.getElementById('hscInstitution').value.trim();
  const hscBoard = document.getElementById('hsc-board').value;
  const hscScore = parseInt(document.getElementById('hscScore').value.trim());
  const sscInstitution = document.getElementById('sscInstitution').value.trim();
  const sscBoard = document.getElementById('ssc-board').value;
  const sscScore = parseInt(document.getElementById('sscScore').value.trim());
  const currentlyPursuing = document.getElementById('currently-pursuing').value;
  const currentInstitution = document.getElementById('currentInstitution').value.trim();
  const overallScore = parseInt(document.getElementById('overallScore').value.trim());
  const currentBacklogs = parseInt(document.getElementById('currentBacklogs').value.trim());
  var photo = document.getElementById("photo");
  var hscMarksheet = document.getElementById("hscMarksheet");
  var sscMarksheet = document.getElementById("sscMarksheet");
  var semesterMarksheet = document.getElementById("semesterMarksheet");
  localStorage.setItem("formData", JSON.stringify(formdata));
});







































// function next() {
//     // Get form elements
//     const firstName = document.getElementById("name").value.trim();
//     const lastName = document.getElementById("name").value.trim();
//     const dob = document.getElementById("date").value.trim();
//     const email = document.getElementById("Email").value.trim();
//     const fatherFirstName = document.getElementById("Fathername").value.trim();
//     const fatherLastName = document.getElementById("Fathername").value.trim();
//     const motherFirstName = document.getElementById("Mothername").value.trim();
//     const motherLastName = document.getElementById("Mothername").value.trim();
//     const gender = document.querySelector('input[name="gender"]:checked');
//     const nationality = document.getElementById("Nationality").value.trim();
//     const homeAddress = document.getElementById("Home").value.trim();
//     const city = document.getElementById("City").value.trim();
//     const country = document.getElementById("country").value;
//     const telephoneHome = document.getElementById("Telephone-Home").value.trim();
//     const mobile = document.getElementById("Mobile").value.trim();
  
//     // Validate form fields
//     if (firstName === "" || lastName === "" || dob === "" || email === "" ||
//         fatherFirstName === "" || fatherLastName === "" ||
//         motherFirstName === "" || motherLastName === "" || !gender ||
//         nationality === "" || homeAddress === "" || city === "" ||
//         country === "country" || telephoneHome === "" || mobile === "") {
//       alert("Please fill in all required fields.");
//       return;
//     }
  
//     if ("@" not in email) {
//       alert("Please enter a valid email address.");
//       return;
//     }
  
//     if ((parseInt(telephoneHome.length)===10) || (parseInt(mobile.length)===10)) {
//       alert("Please enter a valid phone number.");
//       return;
//     }
  
//     // Move to next page
//     document.getElementById("page1").style.display = "none";
//     document.getElementById("page2").style.display = "block";
//   }
  
//   function isvalidateEmail(email) {
//     if (!email) return false;
//     email = email.trim();
//     if (!email) return false;
//     const atIndex = email.indexOf('@');
//     const dotIndex = email.lastIndexOf('.');
//     return atIndex >= 1 && dotIndex > atIndex && dotIndex < email.length - 1;
// }

// function isvalidatePhone(phone) {
//     if (!phone) return false;
//     phone = phone.trim();
//     if (!phone) return false;
//     if (phone.length !== 10) return false;
//     return !isNaN(Number(phone));
// }
// // Get form element
// const form = document.getElementById('form-page2');

// // Add submit event listener to the form
// form.addEventListener('submit', (event) => {
//   // Prevent form from submitting
//   event.preventDefault();

//   // Get input values
//   const hscInstitution = document.getElementById('hscInstitution').value.trim();
//   const hscBoard = document.getElementById('hsc-board').value;
//   const hscScore = parseInt(document.getElementById('hscScore').value.trim());
//   const sscInstitution = document.getElementById('sscInstitution').value.trim();
//   const sscBoard = document.getElementById('ssc-board').value;
//   const sscScore = parseInt(document.getElementById('sscScore').value.trim());
//   const currentlyPursuing = document.getElementById('currently-pursuing').value;
//   const currentInstitution = document.getElementById('currentInstitution').value.trim();
//   const overallScore = parseInt(document.getElementById('overallScore').value.trim());
//   const currentBacklogs = parseInt(document.getElementById('currentBacklogs').value.trim());

//   // Validate input values
//   if (hscInstitution === '') {
//     alert('Please enter HSC Institution Name');
//     return;
//   }

//   if (hscBoard === '') {
//     alert('Please select HSC Board');
//     return;
//   }

//   if (isNaN(hscScore) || hscScore < 0 || hscScore > 100) {
//     alert('Please enter a valid HSC Score (%) between 0 to 100');
//     return;
//   }

//   if (sscInstitution === '') {
//     alert('Please enter SSC Institution Name');
//     return;
//   }

//   if (sscBoard === '') {
//     alert('Please select SSC Board');
//     return;
//   }

//   if (isNaN(sscScore) || sscScore < 0 || sscScore > 100) {
//     alert('Please enter a valid SSC Score (%) between 0 to 100');
//     return;
//   }

//   if (currentlyPursuing === '') {
//     alert('Please select Currently Pursuing');
//     return;
//   }

//   if (currentInstitution === '') {
//     alert('Please enter Current Educational Institution Name');
//     return;
//   }

//   if (isNaN(overallScore) || overallScore < 0 || overallScore > 100) {
//     alert('Please enter a valid Overall Score (%) between 0 to 100');
//     return;
//   }

//   if (isNaN(currentBacklogs) || currentBacklogs < 0) {
//     alert('Please enter a valid Current Backlogs (if any)');
//     return;
//   }

//   // Submit form if all input values are valid
//   form.submit();
// });
// function Submit() {
//   // Get form elements
//   var photo = document.getElementById("photo");
//   var hscMarksheet = document.getElementById("hscMarksheet");
//   var sscMarksheet = document.getElementById("sscMarksheet");
//   var semesterMarksheet = document.getElementById("semesterMarksheet");
  
//   // Get form values
//   var photoValue = photo.value.trim();
//   var hscMarksheetValue = hscMarksheet.value.trim();
//   var sscMarksheetValue = sscMarksheet.value.trim();
//   var semesterMarksheetValue = semesterMarksheet.value.trim();
  
//   // Validate form values
//   if (photoValue == "" || hscMarksheetValue == "" || sscMarksheetValue == "" || semesterMarksheetValue == "") {
//     alert("Please upload all required documents.");
//     return false;
//   }
  
//   if (!photoValue.match(/\.(jpg|jpeg|png)$/i)) {
//     alert("Please upload a valid photo in JPG, JPEG, or PNG format.");
//     return false;
//   }
  
//   if (!hscMarksheetValue.match(/\.(pdf|doc|docx|jpg|jpeg|png)$/i)) {
//     alert("Please upload a valid HSC mark sheet in PDF, DOC, DOCX, JPG, JPEG, or PNG format.");
//     return false;
//   }
  
//   if (!sscMarksheetValue.match(/\.(pdf|doc|docx|jpg|jpeg|png)$/i)) {
//     alert("Please upload a valid SSC mark sheet in PDF, DOC, DOCX, JPG, JPEG, or PNG format.");
//     return false;
//   }
  
//   if (!semesterMarksheetValue.match(/\.(pdf|doc|docx)$/i)) {
//     alert("Please upload a valid all semesters mark sheet in PDF, DOC, or DOCX format.");
//     return false;
//   }
  
//   // All fields are valid, allow form submission
//   return true;
// }
