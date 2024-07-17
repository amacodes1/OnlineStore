"use client";

import Cart from "@/components/Cart";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  const cart = useCartStore((state) => state.cart);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    country: "",
    town_city: "",
    state: "",
    zip_code: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="CheckoutInformation w-full h-[1276px] lg:h-[1550px] px-4 pb-20 bg-white flex-col justify-start items-center gap-8 inline-flex">
        <div className="CheckoutHeader h-[212px] py-4 md:pt-28  rounded-2xl flex-col justify-start items-start gap-2 flex">
          <div className="Title md:hidden self-stretch px-4 py-2 justify-end items-center gap-4 inline-flex">
            <Image
              className="IconsCloseLine w-6 h-6 relative"
              src="/images/close.png"
              height={500}
              width={500}
              alt="close icon"
            />
          </div>
          <div className="Steppers self-stretch h-[123px] px-4 pb-2 pt-10 rounded-lg flex-col justify-center items-center gap-4 flex">
            <div className="Checkout self-stretch h-[34px] text-center text-dark300 text-base font-bold font-Work_Sans leading-tight">
              CHECKOUT
            </div>
            <div className="Steps self-stretch justify-center items-center gap-[126px] inline-flex">
              <div className="h-[57px] justify-between items-center flex">
                <div className="Step1 flex-col justify-start items-center gap-2 -mr-6 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-green700 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-green50 text-base font-bold font-Work_Sans leading-tight">
                      1
                    </div>
                  </div>
                  <div className="Information text-center text-dark300 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                    Information
                  </div>
                </div>

                <Image
                  className="text-gray500 pb-5 w-24"
                  src="/images/line-icon.png"
                  height={500}
                  width={500}
                  alt="line"
                />

                <div className="Step2 w-[71px] flex-col justify-start items-center gap-2 -ml-4 -mr-4 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-gray500 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-green50 text-base font-bold font-Work_Sans leading-tight">
                      2
                    </div>
                  </div>
                  <div className="Payment text-center text-gray500 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                    Payment
                  </div>
                </div>

                <Image
                  className="text-gray500 pb-5 w-24"
                  src="/images/line-icon.png"
                  height={500}
                  width={500}
                  alt="line"
                />

                <div className="Step3 w-[102px] flex-col justify-start items-center gap-2 -ml-8 inline-flex">
                  <div className="ProcessCheckIconFill w-8 h-8 p-2 bg-gray500 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-green50 text-base font-bold font-Work_Sans leading-tight">
                      3
                    </div>
                  </div>
                  <div className="Confirmation text-center text-gray500 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                    Confirmation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Divider self-stretch h-px bg-gray200" />
        </div>

        {/* Form Mobile */}
        <div className="formMobile px-[2%] hidden">
          {/* Information Section */}
          <div className="Form self-stretch h-[406px] bg-white rounded-[10px] flex-col justify-start items-start gap-6 flex">
            <div className="ContactInformation self-stretch h-[34px] text-dark300 text-xl font-semibold font-Work_Sans leading-normal">
              Contact Information
            </div>
            <div className="Name self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <label className="FirstName text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                First Name
              </label>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <input
                    className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight"
                    placeholder="Enter first name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="Name self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <label className="LastName text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Last Name
              </label>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <input
                    className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight"
                    placeholder="Enter last name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="Phone self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <label className="PhoneNumber text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Phone Number
              </label>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <input
                    className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight"
                    placeholder="Enter phone number"
                    type="number"
                    name="firstName"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="Email self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <label className="EmailAddress text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Email Address
              </label>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <input
                    className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight"
                    placeholder="Enter email"
                    type="email"
                    name="email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="Form self-stretch h-[499px] bg-white rounded-[10px] flex-col justify-start items-start gap-6 flex">
            <label className="ShippingAddress self-stretch h-[34px] text-dark300 text-xl font-semibold font-Work_Sans leading-[34px]">
              Shipping Address
            </label>
            <div className="Street self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <input
                className="StreetAddress text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]"
                type="text"
                name="address"
                id=""
                placeholder="Shipping Address"
                value={formData.streetAddress}
                onChange={handleInputChange}
                required
              />
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                    Stress Address
                  </div>
                </div>
              </div>
            </div>
            <div className="Country self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <label className="Country text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Country *
              </label>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                  <input
                    className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight"
                    placeholder="Enter your country"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />

                  <Image
                    className="IconDown w-3 h-2 text-gray500 relative"
                    src="/images/arrow-down.png"
                    height={500}
                    width={500}
                    alt="arrow down"
                  />
                </div>
              </div>
            </div>
            <div className="Street self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <div className="TownCity text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Town / City *
              </div>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                    Town / City
                  </div>
                </div>
              </div>
            </div>
            <div className="State self-stretch justify-between items-start inline-flex">
              <div className="Name grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className="State text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                  State
                </div>
                <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                  <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                    <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                      State
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Name self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
              <div className="ZipCode text-dark600 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                Zip Code
              </div>
              <div className="Input self-stretch h-10 px-4 bg-white rounded-md border border-gray500 justify-start items-center gap-2 inline-flex">
                <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                  <div className="YourInput grow shrink basis-0 text-gray700 text-base font-normal font-Work_Sans leading-tight">
                    Zip Code
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div>
            <button className="Button self-stretch px-[26px] py-2.5 bg-green500 rounded-lg justify-center items-center gap-2 inline-flex">
              <div className="Next text-center text-green50 text-lg font-semibold font-Work_Sans leading-snug">
                <Link href="/checkoutPaymentProcess">Next</Link>
              </div>
              <div className="arrowleft w-6 h-6 text-green50 relative left-1 bottom-0 rotate-0">
                <Link href="/checkoutPaymentProcess">
                  <img
                    className="CarbonArrowLeft text-green50"
                    src="../../images/arrow-left-white.png"
                  />
                </Link>
              </div>
            </button>
          </div>
        </div>

        {/* Form Desktop Screen */}
        <div className="formDesktop">
          <div className=" w-[100%] h-[1276px] px-28 py-4 md:py-20 lg:py-10 justify-start items-start gap-8 inline-flex">
            <div className="OrderCart w-[400px] md:w-[550px] lg:w-[800px] px-4 py-8 bg-gray50 rounded-2xl flex-col justify-start items-end gap-8 inline-flex">
              <div className="Form self-stretch h-[220px] rounded-[10px] flex-col justify-start items-start gap-6 flex">
                <div className="ContactInformation self-stretch h-[34px] text-dark400 text-xl font-semibold font-Work_Sans leading-normal">
                  Contact Information
                </div>
                <div className="Names self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="Name grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="FirstName text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      First Name
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <input
                          className="YourInput grow shrink basis-0 bg-gray300 text-gray600 text-base font-normal font-Work_Sans leading-tight"
                          placeholder="Enter first name"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Name grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="LastName text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Last Name
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <input
                          className="YourInput grow shrink basis-0 bg-gray300 text-gray600 text-base font-normal font-Work_Sans leading-tight"
                          placeholder="Enter last name"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Contact self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="Email grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="PhoneNumber self-stretch text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Phone Number
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <input
                          className="YourInput grow shrink basis-0 bg-gray300 text-gray600 text-base font-normal font-Work_Sans leading-tight"
                          placeholder="Enter phone number"
                          type="number"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Email grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="EmailAddress self-stretch text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Email Address
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <input
                          className="YourInput grow shrink basis-0 bg-gray300 text-gray600 text-base font-normal font-Work_Sans leading-tight"
                          placeholder="Enter Email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Form self-stretch h-[313px] rounded-[10px] flex-col justify-start items-start gap-6 flex">
                <div className="ShippingAddress self-stretch h-[34px] text-dark400 text-xl font-semibold font-Work_Sans leading-[34px]">
                  Shipping Address
                </div>
                <div className="Street self-stretch h-[69px] flex-col justify-start items-start gap-3 flex">
                  <div className="StreetAddress text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                    Street Address *
                  </div>
                  <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                    <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                      <input
                        className="YourInput grow shrink basis-0 bg-gray300 text-gray600 text-base font-normal font-Work_Sans leading-tight"
                        placeholder="Enter street address"
                        type="text"
                        name="street"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="Address self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="Country grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="Country text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Country *
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <input
                          className="YourInput grow shrink basis-0 bg-gray300 text-gray600 text-base font-normal font-Work_Sans leading-tight"
                          placeholder="Enter country"
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                        />
                        <div className="IconChevronDown w-6 h-6 relative" />
                      </div>
                    </div>
                  </div>
                  <div className="Street grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="TownCity text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Town / City *
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <input
                          className="YourInput grow shrink basis-0 bg-gray300 text-gray600 text-base font-normal font-Work_Sans leading-tight"
                          placeholder="Enter town/city"
                          type="text"
                          name="town"
                          value={formData.town_city}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="State self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="State grow shrink basis-0 h-[69px] justify-between items-start flex">
                    <div className="Name grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                      <div className="State text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                        State
                      </div>
                      <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                        <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                          <input
                            className="YourInput grow shrink basis-0 bg-gray300 text-gray600 text-base font-normal font-Work_Sans leading-tight"
                            placeholder="Enter state"
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Name grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className="ZipCode text-dark400 text-sm font-semibold font-Work_Sans leading-[16.80px]">
                      Zip Code
                    </div>
                    <div className="Input self-stretch h-10 px-4 bg-gray300 rounded-md border border-gray50 justify-start items-center gap-2 inline-flex">
                      <div className="IconInput grow shrink basis-0 h-[19px] justify-start items-center gap-2 flex">
                        <input
                          className="YourInput grow shrink basis-0 bg-gray300 text-gray600 text-base font-normal font-Work_Sans leading-tight"
                          placeholder="Enter zipcode"
                          type="number"
                          name="zipcode"
                          value={formData.zip_code}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Button self-stretch px-[26px] py-2.5 bg-green500 rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="PlaceOrder text-center text-emerald-50 text-xl font-semibold font-Work_Sans leading-normal">
                  <Link href="/checkoutPaymentProcess">Place Order</Link>
                </div>
              </div>
            </div>

            {/* Cart Component */}
            <div className="hidden lg:block">
              <div className="OrderCart w-[385px] bg-gray50 rounded-2xl flex-col justify-start items-center gap-8 inline-flex">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
