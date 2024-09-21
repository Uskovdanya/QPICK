export function formatCurrency(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value);
}
export function formatCurrencyWithoutRUB(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
  }).format(value);
}

export const flagemojiToPNG = (flag: string) => {
  const countryCode = flag.toLowerCase();
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
}; // эта функция конвертирует эмоджи в картинку флага

const getInputNumbersValue = (value: string) => {
  return value.replace(/\D/g, ""); // Remove all non-numeric characters
};
export const handlePhoneInput = (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  const input = event.target;
  let inputNumbersValue = getInputNumbersValue(input.value);
  let formattedInputValue = "";

  const selectionStart = input.selectionStart;

  if (!inputNumbersValue) {
    return (input.value = "");
  }

  if (input.value.length !== selectionStart) {
    return;
  }

  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] == "9") {
      inputNumbersValue = "7" + inputNumbersValue;
    }
    const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";

    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ")" + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
    }
  } else {
    formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
  }
  input.value = formattedInputValue;
};

export const handlePhoneKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement>,
) => {
  // remove first symbol
  const input = event.target as HTMLInputElement;
  if (
    event.key === "Backspace" &&
    getInputNumbersValue(input.value).length === 1
  ) {
    input.value = "";
  }
  return input;
};

export const handlePhonePaste = (
  event: React.ClipboardEvent<HTMLInputElement>,
) => {
  const pasted = event.clipboardData ?? (window as any)["clipboardData"];
  const input = event.target as HTMLInputElement;
  const inputNumbersValue = getInputNumbersValue(input.value);
  if (pasted) {
    const pastedText = pasted.getData("Text");
    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue;
    }
  }
};

export const handleCreditCardInput = (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  const input = event.target;
  const inputNumbersValue = getInputNumbersValue(input.value);
  if (!inputNumbersValue) {
    return (input.value = "");
  }
  const formattedInputValue = inputNumbersValue.match(/.{1,4}/g)?.join("-");
  if (formattedInputValue) {
    input.value = formattedInputValue;
  }

  if (input.value.length > 19) {
    input.value = input.value.slice(0, 19);
  }
};

export const handleDateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  const input = event.target;
  const inputNumbersValue = getInputNumbersValue(input.value);
  if (!inputNumbersValue) {
    return (input.value = "");
  }
  const formattedInputValue = inputNumbersValue.match(/.{1,2}/g)?.join("/");
  if (formattedInputValue) {
    input.value = formattedInputValue;
  }
};

export const handleCvcInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  const input = event.target;
  const inputNumbersValue = getInputNumbersValue(input.value);
  if (!inputNumbersValue) {
    return (input.value = "");
  }
  if (inputNumbersValue.length <= 3) {
    input.value = inputNumbersValue;
  }
};
