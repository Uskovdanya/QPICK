import { useTranslation } from "react-i18next";
import { useAppSelector } from "../hooks/hooks";
import { getCart, getTotalCartPrice } from "../state/cartSlice";
import {
  flagemojiToPNG,
  formatCurrency,
  handleCreditCardInput,
  handleCvcInput,
  handleDateInput,
  handlePhoneInput,
  handlePhoneKeyDown,
  handlePhonePaste,
} from "../utils/helpers";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  email: string;
  cardHolder: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  billingAddress: string;
  billingCity: string;
  phoneNumber: string;
};
function Checkout() {
  const [pending, setPending] = useState(false);

  const cart = useAppSelector(getCart);
  const totalCartPrice = useAppSelector(getTotalCartPrice);

  const shippingCost = 1000;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setPending(true);
    console.log(data);
    setPending(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-0 pt-8 md:px-4">
          <p className="text-xl font-medium">{t("infoAboutOrder")}</p>
          <p className="text-gray-400">{t("checkOrderMessage")}</p>
          <ul className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cart.map((checkOutItem) => (
              <li
                className="flex flex-col rounded-lg bg-white sm:flex-row"
                key={checkOutItem.itemId}
              >
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={checkOutItem.img}
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{checkOutItem.title}</span>
                  <span className="inline text-gray-400">
                    {formatCurrency(checkOutItem.unitPrice)} x{" "}
                    <span className="font-bold">{checkOutItem.quantity}</span>
                  </span>

                  <p className="text-lg font-bold">
                    {formatCurrency(checkOutItem.totalPrice)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form
          className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-xl font-medium">{t("payment")}</p>
          <p className="text-gray-400">{t("finishPurchaseMessage")}</p>
          <div className="">
            <label
              htmlFor="email"
              className="mb-2 mt-4 block text-sm font-medium"
            >
              {t("email")}
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                placeholder="your.email@gmail.com"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-accentColor focus:ring-accentColor"
                autoComplete="off"
                {...register("email", {
                  required: {
                    value: true,
                    message: t("showEmailMessage"),
                  },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: t("wrongEmailMessage"),
                  },
                })}
              />

              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>

            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}

            <label
              htmlFor="card-holder"
              className="mb-2 mt-4 block text-sm font-medium"
            >
              {t("cardHolder")}
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-accentColor focus:ring-accentColor"
                placeholder={t("fullName")}
                autoComplete="off"
                {...register("cardHolder", {
                  required: {
                    value: true,
                    message: t("specifyNameMessage"),
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: t("nameWithoutNumbersMessage"),
                  },
                  maxLength: {
                    value: 30,
                    message: t("shortNameMessage"),
                  },
                })}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>

            {errors.cardHolder && (
              <p className="text-red-600">{errors.cardHolder.message}</p>
            )}

            <label
              htmlFor="card-no"
              className="mb-2 mt-4 block text-sm font-medium"
            >
              Номер карты
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-accentColor focus:ring-accentColor"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  autoComplete="off"
                  onInput={handleCreditCardInput}
                  {...register("cardNumber", {
                    pattern: {
                      value: /^[0-9+-]+$/,
                      message: t("useOnlyNumbersMessage"),
                    },
                    required: {
                      value: true,
                      message: t("specifyCardNumberMessage"),
                    },
                    minLength: {
                      value: 19,
                      message: t("shortCardNumberMessage"),
                    },
                  })}
                />

                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-accentColor focus:ring-accentColor"
                placeholder="MM/YY"
                autoComplete="off"
                maxLength={5}
                onInput={handleDateInput}
                {...register("cardExpiry", {
                  required: {
                    value: true,
                    message: t("showDateMessage"),
                  },
                  pattern: {
                    value: /^[0-9/]+$/,
                    message: t("useOnlyNumbersMessage"),
                  },
                  minLength: {
                    value: 5,
                    message: t("shortDateMessage"),
                  },
                })}
              />
              <input
                type="text"
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-accentColor focus:ring-accentColor"
                placeholder="CVC"
                autoComplete="off"
                maxLength={3}
                onInput={handleCvcInput}
                {...register("cardCvc", {
                  required: {
                    value: true,
                    message: t("specifyCvcMessage"),
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: t("useOnlyNumbersMessage"),
                  },
                  minLength: {
                    value: 3,
                    message: t("shortCvcMessage"),
                  },
                })}
              />
            </div>
            {errors.cardNumber && (
              <p className="text-red-600">{errors.cardNumber.message}</p>
            )}
            {errors.cardExpiry && (
              <p className="text-red-600">{errors.cardExpiry.message}</p>
            )}
            {errors.cardCvc && (
              <p className="text-red-600">{errors.cardCvc.message}</p>
            )}
            <label
              htmlFor="billing-address"
              className="mb-2 mt-4 block text-sm font-medium"
            >
              Платежный адрес
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-accentColor focus:ring-accentColor"
                  placeholder="Street Address"
                  autoComplete="off"
                  {...register("billingAddress", {
                    required: {
                      value: true,
                      message: t("deliverySystemMessage"),
                    },
                    maxLength: {
                      value: 280,
                      message: t("maxSymbolsMessage"),
                    },
                  })}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  {flagemojiToPNG("ru")}
                </div>
              </div>

              <input
                type="text"
                placeholder="Город"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-accentColor focus:ring-accentColor"
                autoComplete="off"
                {...register("billingCity", {
                  required: {
                    value: true,
                    message: t("deliveryCityMessage"),
                  },
                  maxLength: {
                    value: 20,
                    message: t("maxSymbolsMessage"),
                  },
                })}
              />
            </div>
            {errors.billingAddress && (
              <p className="text-red-600">{errors.billingAddress.message}</p>
            )}
            {errors.billingCity && (
              <p className="text-red-600">{errors.billingCity.message}</p>
            )}
            <label
              htmlFor="phoneNumber"
              className="mb-2 mt-4 block text-sm font-medium"
            >
              Телефон
            </label>
            <div className="flex flex-col sm:flex-row">
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-accentColor focus:ring-accentColor"
                {...register("phoneNumber", {
                  required: true,
                  pattern: {
                    value: /^[\d() + -]+$/,
                    message: t("useOnlyNumbersMessage"),
                  },
                })}
                onInput={handlePhoneInput}
                onKeyDown={handlePhoneKeyDown}
                onPaste={handlePhonePaste}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-600">{errors.phoneNumber.message}</p>
            )}

            <div className="mt-6 border-b border-t py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">
                  {t("subtotal")}
                </p>
                <p className="font-semibold text-gray-900">
                  {formatCurrency(totalCartPrice)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">
                  {t("delivery")}
                </p>
                <p className="font-semibold text-gray-900">
                  {formatCurrency(shippingCost)}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">{t("result")}</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(totalCartPrice + shippingCost)}
              </p>
            </div>
          </div>
          <button
            className="mb-8 mt-4 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white hover:-translate-y-[2px] active:translate-y-0"
            disabled={pending}
          >
            {t("buy")}
          </button>
        </form>
      </div>
    </>
  );
}

export default Checkout;
