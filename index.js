

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
  
  // Handle form submission
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const dob = document.getElementById("date").value.trim();
    const email = document.getElementById("Email").value.trim();
    const fatherFirstName = document.getElementById("father_first_name").value.trim();
    const fatherLastName = document.getElementById("father_last_name").value.trim();
    const motherFirstName = document.getElementById("mother_first_name").value.trim();
    const motherLastName = document.getElementById("mother_last_name").value.trim();
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
    const successBox=document.getElementById("success-Box")
    const ResetBtn=document.getElementById("reset-btn")
    const PreviewBtn=doucmnet.getElementById("preview-btn")

    const formdata = {
      firstName,
      lastName,
      dob,
      email,
      fatherFirstName,
      fatherLastName,
      motherFirstName,
      motherLastName,
      gender,
      nationality,
      homeAddress,
      city,
      country,
      telephoneHome,
      mobile,
      hscInstitution,
      hscBoard,
      hscScore,
      sscInstitution,
      sscBoard,
      sscScore,
      currentlyPursuing,
      currentInstitution,
      overallScore,
      currentBacklogs,
      photo: photo.files[0],
      hscMarksheet: hscMarksheet.files[0],
      sscMarksheet: sscMarksheet.files[0],
      semesterMarksheet: semesterMarksheet.files[0]
    };
    localStorage.setItem("formData", JSON.stringify(formdata));
    formContainerBox.style.display="none";
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
    successBox.style.display="flex"
    
  });
  

  prev_button1.addEventListener("click",()=>{
    first_form.style.display="block";
    second_form.style.display="none"
  })

  prev_button2.addEventListener("click",()=>{
    third_form.style.display="none";
    second_form.style.display="block"
  })


  ResetBtn.addEventListener("click",()=>{
    successBox.style.display="none"
    formContainerBox.style.display="none"
    window.location.reload()
  })

  PreviewBtn.addEventListener("click",()=>{
    const data = JSON.parse(localStorage.getItem("formData"));
    successBox.innerHTML = `
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
    document.body.appendChild(successBox);

  })

})






