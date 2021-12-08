# WellNet

Endpoints: 

- '/covid-verification' 
  - This endpoint displays a covid screening form for employees to take 
  - The form is represented by an object in angular which has an employee id(links to employee object), covid status(boolean) and timestamp
  - Upon login the timestamp is used to check if an employee has been tested in the past 24 hours. If the employee has not been tested in the past 24 hours, login redirects them to /covid-verification.
  - If the employee shows covid symptoms or has tested positive they are prompted to enter the date of their last positive and their covid status is updated to true.
  - If the employee is covid negative they are able to login into their home page

- '/diagnosis'
  - This endpoint displays a form for a nurse or doctor to keep track of a checked-in patient
  - Nurses will be redirected here after checking a patient into a room
  - Nurses are able to see all of a patient's information and can describe the patient's symptoms and suggest a diagnosis
  - Doctors will be able to look at a patient's information here
  - Doctors will be able to see everything a nurse does, plus an extra field for prescribing a treatment
  - Prescription of treatment effectively checks a patient out of the hospital

- '/lockout'
  - This endpoint displays for employees who are covid positive in place of their home page
  - Employees who are covid positive are locked out of their main account until 14 days have past since their last positive test
  - Lockout counts down the time from 14 days since an employee's last positive test
  - When the time expires the employees are redirected to retake the covid-verification form upon login

  - '/nurse'
    - This route directs the user to the nurse's home page
    - A nurse can view all patients currently checked into the hospital system
    - A nurse can search for particular patients using the following user credentials
      - first name
      - first name and last name
      - first name, last name, and date of birth
    - A nurse has access to the side bar options to
      - view their profile
      - check in a new patient
      - add or delete vaccines and allergies
      - log out
      - navigate back to their home screen
  - '/doctor'
    - This route directs the user to the doctor's home page
    - A doctor cav view all patients checked in awaiting treatment
    - A doctor can view all patients currently checked into the hospital system
    - A doctor can search for particular patients using the following user credentials
      - first name
      - first name and last name
      - first name, last name, and date of birth
    - A doctor can search for patients by their primary physician, the last doctor who diagnosed them
    - A doctor has access to the side bar options to
      - view their profile
      - check in a new patient
      - add or delete vaccines and allergies
      - log out
      - navigate back to their home screen
  - '/patientcheckin'
    - This route directs the user to the patient check in or add patient page
    - A user can check in a new field by adding in the fields for the patient information
  - '/profile'
    - This route directs the user to the user profile page
    - A user from here can navigate to edit their profile information
    - A user can see their first name, last name, email, role
  - '/profileEdit'
    - This route directs the user to the edit profile page
    - A user can edit their first name and last name upon this page
  - '/addAllergiesVaccines'
    - This route directs the user to the add allergies and vaccines page
    - A user can add new allergies to the hospital system
    - A user can add new vaccines to the hospita system
    - A user can delete unused allergies from the hospital system
    - A user can delete unused vaccines from the hospital system
 

Models:
- Covid-Verification
  - Contains formKey(primary key), lastTest(timestamp), covidStatus(boolean)
- Diagnosis-Form
  - Contains:
    - diagnosis Id (primary key)
    - diagnosis (string)
    - symptoms (string)
    - treatment (string)
    - resolution status (boolean)
    - check-in (date)
    - check-out (date)
    - patient (Patient object)
    - room (Room object)
    - nurse (User object)
    - doctor (User object)
  - user
    - Contains id (primary key), firtname, lastname, email, role (foreign key)
  - role
    - Contains roleId (primary key), role
  - allergy
    - Contains allergyId (primary key), allergy
  - bloodtype
    - Contains typeId (primary key), type
  - vaccine
    - Contains vaccinationId (primary Key), vaccination
  - sex
    - Contains sexId (primary Key), sex
  - registration-info
    - Contains firstname, lastname, email, role (foreign key)


Testing automation:
- Employees are required to take a test if they have not been tested in the last 24 hours
- The login method contains the logic to determine the last test time
- Firebase locks out all paths besides 'lockout' for users who have covidStatus=TRUE

Nurse Home Page :
  - A nurse can view all patients, search for a patient, add new patients, edit user profile, start diagnosis
 
Doctor Home Page :
  - A doctor can view all patients, view patients awaiting diagnosis, complete diagnosis, view the last doctor to diagnose a patient, search for specific patients, edit user profile

Add a patient Page :
  - A nurse can add a patient using a first name, last name, dob, height, weight, blood type and sex
  - A nurse can add optional vaccinations and allergies to a patient



