import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { Field, Label, Textarea } from "@headlessui/react";
import clsx from "clsx";

import Date from "@/assets/icons/calendar.svg";
import Relation from "@/assets/icons/chart-relationship.svg";
import Child from "@/assets/icons/child.svg";
import ChildGender from "@/assets/icons/kid.svg";
import Gender from "@/assets/icons/location-user-01.svg";
import Location from "@/assets/icons/location.svg";
import ChildNumber from "@/assets/icons/number-sign.svg";
import Name from "@/assets/icons/text-creation.svg";
import User from "@images/user.png";

export const ParentView: React.FC = () => {
  return (
    <>
      <div className=" h-auto flex justify-between gap-6 pt-4">
        <div className="w-1/2 h-hull bg-white rounded-xl py-5">
          <h3 className=" text-[#242424] font-extrabold text-xl pl-8 py-1">
            Parent Information
          </h3>
          <div className="w-[400px] h-[430px] bg-[#F1F2F1] rounded-xl mx-8 mt-4 mb-14 py-5 pl-6">
            <div>
              <h2 className="text-[#1E2428] font-extrabold text-lg pb-3">
                Lee-JI-Won
              </h2>
              <div className="w-20 h-20">
                <img src={User} alt="" />
              </div>

              <div className="flex gap-3 pb-2">
                <Name />
                <p className="text-[#9C9C9C] text-base font-normal">
                  Parent Name:
                </p>
                <p className="text-base font-normal text-[#242424]">
                  Lee-JI-Won
                </p>
              </div>

              <div className="flex gap-3">
                <Date />
                <p className="text-[#9C9C9C] text-base font-normal">
                  Parent's Date of Birth:
                </p>
                <p className="text-base font-normal text-[#242424]">
                  10-8-2000
                </p>
              </div>

              <div className="flex gap-3 py-2">
                <Gender />
                <p className="text-[#9C9C9C] text-base font-normal">Gender:</p>
                <p className="text-base font-normal text-[#242424]">Female</p>
              </div>

              <div className="flex gap-3">
                <Location />
                <p className="text-[#9C9C9C] text-base font-normal">Address:</p>
                <p className="text-base font-normal text-[#242424]">
                  Gwangju, Korea
                </p>
              </div>

              <div className="flex gap-3 py-2">
                <ChildNumber />
                <p className="text-[#9C9C9C] text-base font-normal">
                  Child Number:
                </p>
                <p className="text-base font-normal text-[#242424]">03</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2  bg-white rounded-xl py-5">
          <h3 className=" text-[#242424] font-extrabold text-xl pl-6 py-3">
            Child Information
          </h3>

          <div className=" w-full px-6">
            <div className="mx-auto w-full max-w-lg divide-y-8 divide-white rounded-xl bg-[#f8f7f7]">
              <Disclosure as="div" className=" rounded-xl" defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between py-4 px-5">
                  <span className="  text-lg font-semibold text-black">
                    Child 01
                  </span>
                  <ChevronDownIcon className="size-5 fill-black  group-data-[open]:rotate-180" />
                </DisclosureButton>

                <DisclosurePanel className="mt-1 bg-[#F1F2F1] rounded-xl">
                  <div className="px-6 py-5">
                    <div className="flex gap-3 py-2">
                      <Child />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Child Name:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Haneul
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <ChildGender />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        child's Date of Birth:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        10-8-2000
                      </p>
                    </div>

                    <div className="flex gap-3 py-2">
                      <Relation />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Chil Gender:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Female
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Date />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Relation with Gurdian:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Mother
                      </p>
                    </div>

                    <div className="py-5">
                      <span>Selected Tags :</span>
                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Shy around strangers
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal">
                        Energetic
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Quiet and introverted
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal">
                        Highly creative
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Highly focused
                      </p>
                    </div>

                    <div className="w-full max-w-md px-4 ">
                      <Field>
                        <Label className="text-base font-semibold text-black">
                          Special Note
                        </Label>

                        <Textarea
                          className={clsx(
                            "mt-3 block w-full resize-none rounded-xl border-none bg-white py-1.5 px-3 text-sm/6 text-white",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                          rows={3}
                        />
                      </Field>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>

              <Disclosure as="div" className="" defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between py-4 px-5">
                  <span className="  text-lg font-semibold text-black">
                    Child 02
                  </span>
                  <ChevronDownIcon className="size-5 fill-black  group-data-[open]:rotate-180" />
                </DisclosureButton>

                <DisclosurePanel className="mt-1 bg-[#F1F2F1] rounded-xl">
                  <div className="px-6 py-5">
                    <div className="flex gap-3 py-2">
                      <Child />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Child Name:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Haneul
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <ChildGender />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        child's Date of Birth:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        10-8-2000
                      </p>
                    </div>

                    <div className="flex gap-3 py-2">
                      <Relation />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Chil Gender:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Female
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Date />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Relation with Gurdian:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Mother
                      </p>
                    </div>

                    <div className="py-5">
                      <span>Selected Tags :</span>
                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Shy around strangers
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal">
                        Energetic
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Quiet and introverted
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal">
                        Highly creative
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Highly focused
                      </p>
                    </div>

                    <div className="w-full max-w-md px-4 ">
                      <Field>
                        <Label className="text-base font-semibold text-black">
                          Special Note
                        </Label>

                        <Textarea
                          className={clsx(
                            "mt-3 block w-full resize-none rounded-xl border-none bg-white py-1.5 px-3 text-sm/6 text-white",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                          rows={3}
                        />
                      </Field>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>

              <Disclosure as="div" className="" defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between py-4 px-5">
                  <span className="  text-lg font-semibold text-black">
                    Child 03
                  </span>
                  <ChevronDownIcon className="size-5 fill-black  group-data-[open]:rotate-180" />
                </DisclosureButton>

                <DisclosurePanel className="mt-1 bg-[#F1F2F1] rounded-xl">
                  <div className="px-6 py-5">
                    <div className="flex gap-3 py-2">
                      <Child />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Child Name:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Haneul
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <ChildGender />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        child's Date of Birth:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        10-8-2000
                      </p>
                    </div>

                    <div className="flex gap-3 py-2">
                      <Relation />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Chil Gender:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Female
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Date />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Relation with Gurdian:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Mother
                      </p>
                    </div>

                    <div className="py-5">
                      <span>Selected Tags :</span>
                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Shy around strangers
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal">
                        Energetic
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Quiet and introverted
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal">
                        Highly creative
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Highly focused
                      </p>
                    </div>

                    <div className="w-full max-w-md px-4 ">
                      <Field>
                        <Label className="text-base font-semibold text-black">
                          Special Note
                        </Label>

                        <Textarea
                          className={clsx(
                            "mt-3 block w-full resize-none rounded-xl border-none bg-white py-1.5 px-3 text-sm/6 text-white",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                          rows={3}
                        />
                      </Field>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          {/* <div className="h-screen w-full px-6">
            <div className="mx-auto w-full max-w-lg divide-y divide-black rounded-xl bg-[#f8f7f7]">
              <Disclosure as="div" className="" defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between py-4 px-5">
                  <span className="  text-lg font-semibold text-black">
                    Child 02
                  </span>
                  <ChevronDownIcon className="size-5 fill-black  group-data-[open]:rotate-180" />
                </DisclosureButton>

                <DisclosurePanel className="mt-1 bg-[#F1F2F1] rounded-xl">
                  <div className="px-6 py-5">
                    <div className="flex gap-3 py-2">
                      <Child />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Child Name:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Haneul
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <ChildGender />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        child's Date of Birth:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        10-8-2000
                      </p>
                    </div>

                    <div className="flex gap-3 py-2">
                      <Relation />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Chil Gender:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Female
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Date />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Relation with Gurdian:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Mother
                      </p>
                    </div>

                    <div className="py-5">
                      <span>Selected Tags :</span>
                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Shy around strangers
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal">
                        Energetic
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Quiet and introverted
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal">
                        Highly creative
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Highly focused
                      </p>
                    </div>

                    <div className="w-full max-w-md px-4 ">
                      <Field>
                        <Label className="text-base font-semibold text-black">
                          Special Note
                        </Label>

                        <Textarea
                          className={clsx(
                            "mt-3 block w-full resize-none rounded-xl border-none bg-white py-1.5 px-3 text-sm/6 text-white",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                          rows={3}
                        />
                      </Field>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          <div className="h-screen w-full  px-6">
            <div className="mx-auto w-full max-w-lg divide-y divide-black rounded-xl bg-[#f8f7f7]">
              <Disclosure as="div" className="" defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between py-4 px-5">
                  <span className="  text-lg font-semibold text-black">
                    Child 01
                  </span>
                  <ChevronDownIcon className="size-5 fill-black  group-data-[open]:rotate-180" />
                </DisclosureButton>

                <DisclosurePanel className="mt-1 bg-[#F1F2F1] rounded-xl">
                  <div className="px-6 py-5">
                    <div className="flex gap-3 py-2">
                      <Child />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Child Name:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Haneul
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <ChildGender />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        child's Date of Birth:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        10-8-2000
                      </p>
                    </div>

                    <div className="flex gap-3 py-2">
                      <Relation />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Chil Gender:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Female
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Date />
                      <p className="text-[#9C9C9C] text-base font-normal">
                        Relation with Gurdian:
                      </p>
                      <p className="text-base font-normal text-[#242424]">
                        Mother
                      </p>
                    </div>

                    <div className="py-5">
                      <span>Selected Tags :</span>
                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Shy around strangers
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal">
                        Energetic
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Quiet and introverted
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal">
                        Highly creative
                      </p>

                      <p className="text-[#9C9C9C] text-base font-normal py-3">
                        Highly focused
                      </p>
                    </div>

                    <div className="w-full max-w-md px-4 ">
                      <Field>
                        <Label className="text-base font-semibold text-black">
                          Special Note
                        </Label>

                        <Textarea
                          className={clsx(
                            "mt-3 block w-full resize-none rounded-xl border-none bg-white py-1.5 px-3 text-sm/6 text-white",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                          rows={3}
                        />
                      </Field>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
