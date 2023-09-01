// THIS SEEMS LIKE A COMPLICATED PROJECT AS THERE ARE THINGS TO ACCOUNT FOR

// * The user must enter valid parameters for the date, month and the year

// * For the year, I want the user to only enter a year between 1970 and the current year. Any year outside this is invalid.

// * For the month, I need to ensure that the user only enters values between 1 - 12 which will mean January - December.

// * For the date, this is a bit tricky because depending on which month the user enters the date for the end of the month varies. For Example:
//    * 30 days is only available September, April, June and November
//    * 28 days is only available to February but we will have 29 days if a leap year occurs
//    * 31 days exist for the all the other months excluding those mentioned above.

// * When the user fails any of the conditions we need to display error messages depending on the fail on submission of the form.

// * When the user passes the condition then we need to calculate the users age in years, months and days based on the users inputs and the current year.

// * We also need to update the UI as the user submits the form.

const lightRed = "#FF5959";
const smokeyGrey = "#716f6f";

/** Class representing the first and last day of the month */
class Month {
  startDate = 1;

  /**
   * The end day of the month
   * @param {number} endDate
   */
  constructor(endDate) {
    this.endDate = endDate;
  }
}

const January = new Month(31);
const February = new Month(28);
const March = new Month(31);
const April = new Month(30);
const May = new Month(31);
const June = new Month(30);
const July = new Month(31);
const August = new Month(31);
const September = new Month(30);
const October = new Month(31);
const November = new Month(30);
const December = new Month(31);

const monthsInAYear = [
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
];

class AppComponent {
  #dayInput = /** @type {HTMLInputElement} */ (document.getElementById("day"));
  #monthInput = /** @type {HTMLInputElement} */ (
    document.getElementById("month")
  );
  #yearInput = /** @type {HTMLInputElement} */ (
    document.getElementById("year")
  );
  #button = document.querySelector(".btn-submit");

  constructor() {
    this.#button?.addEventListener("click", this.#submitDate.bind(this));
  }

  /**
   * The event object will be available when the click event is fired
   *
   * @param {event} evtObj
   */
  #submitDate(evtObj) {
    evtObj?.preventDefault();

    // We want to check the validity of each of the input.
    // The none of the inputs should be empty on form submission and if one or all are show an error to be user
    // If one of the values is not a number then return an error if one or all are not values.
    this.#validateInput(this.#dayInput);
    this.#validateInput(this.#monthInput);
    this.#validateInput(this.#yearInput);

    const isInvalid =
      this.#validateInput(this.#dayInput) ||
      this.#validateInput(this.#monthInput) ||
      this.#validateInput(this.#yearInput);

    if (isInvalid) {
      return;
    }

    const year = Number(this.#yearInput.value);
    const month = Number(this.#monthInput.value);
    const day = Number(this.#dayInput.value);

    // Update the UI if the numbers are not suitable conditions.
    const isValidDate = this.#validateDate(year, month, day);

    if (!isValidDate) {
      return;
    }

    // FireFox throw an error when you pass in the month and days as 1 instead 01 so I account for this here.
    // The year is ok because we cannot go below 1970 and above the current year which is 2023 at this point.
    const monthFormat = month < 10 ? `0${month}` : `${month}`;
    const dayFormat = day < 10 ? `0${day}` : `${day}`;

    // MAKING USE OF THE DATE TIME STRING FORMAT --> YYYY-MM-DDTHH:mm:ss:sssZ
    const birthdayDate = new Date(
      `${year}-${monthFormat}-${dayFormat}T00:00:00Z`
    );

    const age = this.#calculateAge(birthdayDate);

    // The next step is to display the result and update the UI.

    this.#displayAge(age);
  }

  /**
   * This function display the age in years, months and days based on the users input.
   * @param {object} age
   * @param {number} age.years - number of years
   * @param {number} age.months - number of months
   * @param {number} age.days - number of days
   */

  #displayAge({ years, months, days }) {
    const displayAgeComponent = /** @type {HTMLElement} */ (
      document.querySelector("div[class~='display-age-component']")
    );
    displayAgeComponent.classList.add("show");
    displayAgeComponent.innerHTML = `
    <p class="display-age-component__year"><span>${years} </span> years</p>
    <p class="display-age-component__month"><span>${months} </span> months</p>
    <p class="display-age-component__days"><span>${days} </span> days</p>
    `;
  }

  /**
   * Calculates the difference between two dates in years, months, and days.
   * @param {Date} birthdayDate - The date of birth
   * @returns {{years:number, months:number, days:number} } An object containing the number of years, months, and days between the two dates.
   */
  #calculateAge(birthdayDate) {
    // We need to create the current date
    const currentDate = new Date();
    const dateOfBirth = birthdayDate;

    let years = currentDate.getFullYear() - dateOfBirth.getFullYear();
    let months = currentDate.getMonth() - dateOfBirth.getMonth();
    let days = currentDate.getDate() - dateOfBirth.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();

      // At this point its is possible that the current day date is less than the day for the date of birth.
      // We need to get the last date of the previous month from the current date and to do this we need to pass in 0 as the last argument in the date constructor. This will give us what we want.
      // Then we can obtain the last day of that month.
      // Then we add the last day to our days to keep updating it provided it passes the if check.
      const previousLastMonthDate = new Date(currentYear, currentMonth, 0);
      const previousLastMonthDay = previousLastMonthDate.getDate();
      days = days + previousLastMonthDay;
    }

    // Check if the birthday falls on February 29th
    if (dateOfBirth.getMonth() === 1 && dateOfBirth.getDate() === 29) {
      // We need to find the last leap year
      let lastLeapYear = currentDate.getFullYear();

      // We need check to see when the last leap year occurred it could be this year or the year or years before the current year.
      while (
        !(
          (lastLeapYear % 4 === 0 && lastLeapYear % 100 !== 0) ||
          lastLeapYear % 400 === 0
        )
      ) {
        lastLeapYear--;
      }

      years = lastLeapYear - dateOfBirth.getFullYear();

      if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
      }

      if (days < 0) {
        months--;
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const previousLastMonthDate = new Date(currentYear, currentMonth, 0);
        const previousLastMonthDay = previousLastMonthDate.getDate();
        days = days + previousLastMonthDay;
      }
    }

    return { years, months, days };
  }

  /**
   * This functions checks to see if the values passed in make up a valid date
   * @param {number} year This is number of years
   * @param {number} month This is the number of months
   * @param {number} day This is the day of the month.
   * @returns {boolean} This indicates if it is valid or not by returning a boolean true or false.
   */

  #validateDate(year, month, day) {
    const currentDate = new Date();
    const epochDate = new Date(1000);
    const indexedMonth = month - 1;

    const currentYear = currentDate.getFullYear();
    const epochYear = epochDate.getFullYear();

    // Check if the year pass n is a leap year
    const isLeapYear = new Date(year, 1, 29).getDate() === 29;
    February.endDate = isLeapYear ? 29 : 28;

    const checkIndexMonth = indexedMonth < 0 || indexedMonth > 11;
    const checkMaxYear = year > currentYear;
    const checkMinYear = year < epochYear;
    const checkMinDay = day < monthsInAYear[indexedMonth]?.startDate;
    const checkMaxDay = day > monthsInAYear[indexedMonth]?.endDate;

    if (
      checkIndexMonth ||
      checkMaxYear ||
      checkMinYear ||
      checkMinDay ||
      checkMaxDay
    ) {
      if (indexedMonth < 0 || indexedMonth > 11) {
        this.#showErrorMessage(this.#monthInput, "Must be a valid month");
      }

      if (year > currentYear) {
        this.#showErrorMessage(this.#yearInput, "Must be in the past");
      } else if (year < epochYear) {
        this.#showErrorMessage(this.#yearInput, "Must be more than 1970");
      }

      if (
        day < monthsInAYear[indexedMonth]?.startDate ||
        day > monthsInAYear[indexedMonth]?.endDate
      ) {
        this.#showErrorMessage(this.#dayInput, "Must be a valid date");
      } else if (day < 1 || day > 31) {
        this.#showErrorMessage(this.#dayInput, "Must be a valid day");
      }

      return false;
    } else {
      return true;
    }
  }

  /**
   * This method validate the HTMLInputElements
   * @param {HTMLInputElement} input
   * @return {void | boolean} Returns nothing or a boolean with the value of true.
   */
  #validateInput(input) {
    if (input?.value.trim() === "") {
      this.#showErrorMessage(input, "This field is required");
      return true;
    }

    if (isNaN(Number(input?.value))) {
      this.#showErrorMessage(input, "Must be a valid number");
      return true;
    }

    this.#removeErrorMessage(input, "");
  }

  /**
   * This private method will show an error messages and indicators to the user.
   * @param {HTMLInputElement} input
   * @param {string} message
   */
  #showErrorMessage(input, message) {
    input.setAttribute("aria-invalid", "true");
    const errorMessage = /** @type {HTMLElement} */ (input.nextElementSibling);
    errorMessage.innerText = message;
    errorMessage.removeAttribute("hidden");
    const errorLabel = /** @type {HTMLElement} */ (
      input.previousElementSibling
    );
    errorLabel.style.color = lightRed;
  }

  /**
   *
   * @param {HTMLInputElement} input
   * @param {string} message
   */
  #removeErrorMessage(input, message) {
    input.setAttribute("aria-invalid", "false");
    const errorMessage = /** @type {HTMLElement} */ (input.nextElementSibling);
    errorMessage.innerText = message;
    errorMessage.setAttribute("hidden", "hidden");
    const errorLabel = /** @type {HTMLElement}*/ (input.previousElementSibling);
    errorLabel.style.color = smokeyGrey;
  }
}

new AppComponent();
