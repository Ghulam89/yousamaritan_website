import React, { useState } from "react";

const Brands = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };


  return (

    <>
    <div  className=" tw-flex  container mx-auto tw-flex-wrap tw-justify-center tw-gap-10 tw-items-center">
       <div onClick={handleToggle}
                className="tw-border tw-p-4 tw-w-80 tw-rounded-tr-3xl tw-rounded-bl-3xl tw-border-textColor"
              >
                <div className="tw-flex tw-justify-end">
                  <div className="sm:tw-w-10 tw-w-8 tw-rounded-md tw-flex tw-justify-center tw-items-center sm:tw-h-10 tw-h-8 tw-bg-[#F8A11D]">
                    <span className="tw-text-white tw-font-poppins tw-text-sm">2%</span>
                  </div>
                </div>
                <h4 className=" tw-text-[#456DA7] tw-text-[28px] tw-mt-2 tw-font-semibold tw-text-center">
                   Level 01
                </h4>
                <div className="tw-w-full tw-flex-col tw-flex tw-justify-between tw-items-center">
                  <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-my-2">
                    <span className="tw-text-textColor tw-font-semibold ">Total Earnings</span>
                    <span className="tw-text-textColor tw-font-semibold ">Team</span>
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-center tw-w-full">
                    <span className="tw-text-textColor  tw-font-semibold">200.00</span>
                    <span className="tw-text-textColor tw-font-semibold">02</span>
                  </div>
                </div>
              </div>
              <div
              onClick={handleToggle}
                className="tw-border tw-p-4 tw-w-80 tw-rounded-tr-3xl tw-rounded-bl-3xl tw-border-textColor"
              >
                <div className="tw-flex tw-justify-end">
                  <div className="sm:tw-w-10 tw-w-8 tw-rounded-md tw-flex tw-justify-center tw-items-center sm:tw-h-10 tw-h-8 tw-bg-[#F8A11D]">
                    <span className="tw-text-white tw-font-poppins tw-text-sm">2%</span>
                  </div>
                </div>
                <h4 className=" tw-text-[#456DA7] tw-text-[28px] tw-mt-2 tw-font-semibold tw-text-center">
                   Level 01
                </h4>
                <div className="tw-w-full tw-flex-col tw-flex tw-justify-between tw-items-center">
                  <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-my-2">
                    <span className="tw-text-textColor tw-font-semibold ">Total Earnings</span>
                    <span className="tw-text-textColor tw-font-semibold ">Team</span>
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-center tw-w-full">
                    <span className="tw-text-textColor  tw-font-semibold">200.00</span>
                    <span className="tw-text-textColor tw-font-semibold">02</span>
                  </div>
                </div>
              </div>
              <div
              onClick={handleToggle}
                className="tw-border tw-p-4 tw-w-80 tw-rounded-tr-3xl tw-rounded-bl-3xl tw-border-textColor"
              >
                <div className="tw-flex tw-justify-end">
                  <div className="sm:tw-w-10 tw-w-8 tw-rounded-md tw-flex tw-justify-center tw-items-center sm:tw-h-10 tw-h-8 tw-bg-[#F8A11D]">
                    <span className="tw-text-white tw-font-poppins tw-text-sm">2%</span>
                  </div>
                </div>
                <h4 className=" tw-text-[#456DA7] tw-text-[28px] tw-mt-2 tw-font-semibold tw-text-center">
                   Level 03
                </h4>
                <div className="tw-w-full tw-flex-col tw-flex tw-justify-between tw-items-center">
                  <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-my-2">
                    <span className="tw-text-textColor tw-font-semibold ">Total Earnings</span>
                    <span className="tw-text-textColor tw-font-semibold ">Team</span>
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-center tw-w-full">
                    <span className="tw-text-textColor  tw-font-semibold">200.00</span>
                    <span className="tw-text-textColor tw-font-semibold">02</span>
                  </div>
                </div>
              </div>
              <div
              onClick={handleToggle}
                className="tw-border tw-p-4 tw-w-80 tw-rounded-tr-3xl tw-rounded-bl-3xl tw-border-textColor"
              >
                <div className="tw-flex tw-justify-end">
                  <div className="sm:tw-w-10 tw-w-8 tw-rounded-md tw-flex tw-justify-center tw-items-center sm:tw-h-10 tw-h-8 tw-bg-[#F8A11D]">
                    <span className="tw-text-white tw-font-poppins tw-text-sm">2%</span>
                  </div>
                </div>
                <h4 className=" tw-text-[#456DA7] tw-text-[28px] tw-mt-2 tw-font-semibold tw-text-center">
                chief sales officer
                </h4>
                <div className="tw-w-full tw-flex-col tw-flex tw-justify-between tw-items-center">
                  <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-my-2">
                    <span className="tw-text-textColor tw-font-semibold ">Total Earnings</span>
                    <span className="tw-text-textColor tw-font-semibold ">Team</span>
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-center tw-w-full">
                    <span className="tw-text-textColor  tw-font-semibold">200.00</span>
                    <span className="tw-text-textColor tw-font-semibold">02</span>
                  </div>
                </div>
              </div>
              <div
              onClick={handleToggle}
                className="tw-border tw-p-4 tw-w-80 tw-rounded-tr-3xl tw-rounded-bl-3xl tw-border-textColor"
              >
                <div className="tw-flex tw-justify-end">
                  <div className="sm:tw-w-10 tw-w-8 tw-rounded-md tw-flex tw-justify-center tw-items-center sm:tw-h-10 tw-h-8 tw-bg-[#F8A11D]">
                    <span className="tw-text-white tw-font-poppins tw-text-sm">2%</span>
                  </div>
                </div>
                <h4 className=" tw-text-[#456DA7] tw-text-[28px] tw-mt-2 tw-font-semibold tw-text-center">
                Brand Ambassador
                </h4>
                <div className="tw-w-full tw-flex-col tw-flex tw-justify-between tw-items-center">
                  <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-my-2">
                    <span className="tw-text-textColor tw-font-semibold ">Total Earnings</span>
                    <span className="tw-text-textColor tw-font-semibold ">Team</span>
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-center tw-w-full">
                    <span className="tw-text-textColor  tw-font-semibold">200.00</span>
                    <span className="tw-text-textColor tw-font-semibold">02</span>
                  </div>
                </div>
              </div>
    </div>

    
    {isExpanded && (
  <div onClick={() => setIsExpanded(false)} className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-[rgba(0,0,0,0.7)] tw-bg-opacity-75">
    <div className="tw-bg-white tw-rounded-lg tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all tw-w-full tw-max-w-4xl">
      <div className="tw-px-4 tw-py-5 tw-pt-6 tw-bg-white tw-flex tw-justify-center tw-items-center">
        <h2 className="tw-text-2xl tw-font-bold tw-text-[#456DA7]">Earning Statement</h2>
        
      </div>
      <div className="tw-overflow-x-auto tw-h-96 tw-overflow-y-auto">
        <table className="tw-min-w-full tw-mb-0 ">
          <thead className="text-center tw-border-b tw-border-[#456DA7] tw-bg-button-gradient">
            <tr className="tw-rounded-lg tw-whitespace-nowrap">
              <th
                scope="col"
                className=" tw-text-white tw-font-bold tw-px-6 tw-py-4"
              >
                Sr.No
              </th>
              <th
                scope="col"
                className="tw-text-white tw-font-bold tw-px-6 tw-py-4"
              >
                Buy Address
              </th>
              <th
                scope="col"
                className=" tw-text-white tw-font-bold tw-px-6 tw-py-4"
              >
                Amount
              </th>
              <th
                scope="col"
                className="tw-text-white tw-font-bold tw-px-6 tw-py-4"
              >
                Date
              </th>
              <th
                scope="col"
                className="tw-text-white tw-font-bold tw-px-6 tw-py-4"
              >
                My Reward
              </th>
            </tr>
          </thead>
          <tbody className=" ">
            <>
              <tr className="tw-bg-white tw-rounded-md">
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    1
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                  x
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    $10
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    08/17/2024
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                  <span className=" tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    $3
                  </span>
                </td>
              </tr>
              <tr className="tw-bg-white  tw-rounded-md">
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    1
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                  x
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    $10
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    08/17/2024
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                  <span className=" tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    $3
                  </span>
                </td>
              </tr>
              <tr className="tw-bg-white  tw-rounded-md">
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    1
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                  x
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    $10
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    08/17/2024
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                  <span className=" tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    $3
                  </span>
                </td>
              </tr>
              <tr className="tw-bg-white tw-rounded-md">
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    1
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                  x
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    $10
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    08/17/2024
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                  <span className=" tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    $3
                  </span>
                </td>
              </tr>
              <tr className="tw-bg-white tw-rounded-md">
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    1
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                  x
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    $10
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    08/17/2024
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                  <span className=" tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    $3
                  </span>
                </td>
              </tr>
              <tr className="tw-bg-white tw-rounded-md">
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    1
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                  x
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    $10
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    08/17/2024
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                  <span className=" tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    $3
                  </span>
                </td>
              </tr>
              <tr className="tw-bg-white tw-rounded-md">
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    1
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                  x
                  </span>
                </td>
                <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-font-poppins tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-bg-green-200 tw-rounded-full">
                    $10
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                  <span className="tw-text-base tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    08/17/2024
                  </span>
                </td>
                <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                  <span className=" tw-text-black tw-py-1 tw-px-2.5 tw-leading-none tw-text-center tw-whitespace-nowrap tw-align-baseline tw-font-poppins tw-bg-green-200 tw-rounded-full">
                    $3
                  </span>
                </td>
              </tr>
            </>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}

    </>
    






  );
};

export default Brands;
