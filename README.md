# WellNet

## Team 3

Endpoints: 

- '/covid-verification' 
  - This endpoint displays a covid screening form for employees to take 
  - The form is represented by an object in angular which has an employee id(links to employee object), covid status(boolean) and timestamp
  - Upon login the timestamp is used to check if an employee has been tested in the past 24 hours. If the employee has not been tested in the past 24 hours, login redirects them to /covid-verification.
  - If the employee shows covid symptoms or has tested positive they are prompted to enter the date of their last positive and their covid status is updated to true.
  - If the employee is covid negative they are able to login into their home page

- '/lockout'
    - This endpoint displays for employees who are covid positive in place of their home page
    - Employees who are covid positive are locked out of their main account until 14 days have past since their last positive test
    - Lockout counts down the time from 14 days since an employee's last positive test
    - When the time expires the employees are redirected to retake the covid-verification form upon login

Models:
- Covid-Verification
  - Contains formKey(primary key), lastTest(timestamp), covidStatus(boolean)

Testing automation:
- Employees are required to take a test if they have not been tested in the last 24 hours
- The login method contains the logic to determine the last test time
- Firebase locks out all paths besides 'lockout' for users who have covidStatus=TRUE


