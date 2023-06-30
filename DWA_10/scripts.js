/**
 * The maximum number allowed.
 * @type {number}
 */
const maxNumber = 15;

/**
 * The minimum number allowed.
 * @type {number}
 */
const minNumber = -5;

/**
 * The input element for the number.
 * @type {HTMLElement}
 */
const numberInput = document.querySelector('[data-key="number"]');

/**
 * The subtract button element.
 * @type {HTMLElement}
 */
const subtractButton = document.querySelector('[data-key="subtract"]');

/**
 * The add button element.
 * @type {HTMLElement}
 */
const addButton = document.querySelector('[data-key="add"]');

const resetButton = document.querySelector('[variant="default"]');

/**
 * Handles the subtraction operation and updates the state of relevant elements.
 */
const subtractHandler = () => {
    /** @type {number} */
    const newValue = parseInt(numberInput.value) - 1;
    numberInput.value = newValue;

    if (addButton.disabled === true) {
        addButton.disabled = false;
    }

    if (newValue <= minNumber) {
        subtractButton.disabled = true;
    }
};


/**
 * Handles the addition operation and updates the state of relevant elements.
 */
const addHandler = () => {
    /** @type {number} */
    const newValue = parseInt(numberInput.value) + 1;
    numberInput.value = newValue;

    if (subtractButton.disabled === true) {
        subtractButton.disabled = false;
    }

    if (newValue >= maxNumber) {
        addButton.disabled = true;
    }
};

const resetHandler = () => {
    numberInput.value = 0;
    addButton.disabled = false;
    subtractButton.disabled = false;
    showMessage("Are you sure you want to resert?");
  }

  const showMessage = (message) => {
    alert(message);
    message.disabled = false
  };


subtractButton.addEventListener('click', subtractHandler);
addButton.addEventListener('click', addHandler);
resetButton.addEventListener('click', resetHandler);
