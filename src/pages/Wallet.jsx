import React, { useState } from "react";
import Profile from "../Assets/profile.jpg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Sidebar from "../components/Sidebar";
import LineChart from "../components/LineChart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import withdrawIcon from "../Assets/withdraw.png";
import transferIcon from "../Assets/transfer.png";
import depositIcon from "../Assets/deposit.png";
const Wallet = () => {
  // State for the selected filter type
  const [filterType, setFilterType] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  // Sample transaction data
  const transactions = [
    {
      id: "#1234",
      date: "08.06.2024",
      type: "transfer",
      amountUSD: "30 USD",
      amountLKR: "90,000 LKR",
      status: "Completed",
    },
    {
      id: "#1235",
      date: "08.06.2024",
      type: "deposit",
      amountUSD: "30 USD",
      amountLKR: "90,000 LKR",
      status: "Pending",
    },
    {
      id: "#1236",
      date: "08.06.2024",
      type: "withdraw",
      amountUSD: "30 USD",
      amountLKR: "90,000 LKR",
      status: "Declined",
    },
    {
      id: "#1237",
      date: "08.06.2024",
      type: "deposit",
      amountUSD: "30 USD",
      amountLKR: "90,000 LKR",
      status: "Pending",
    },
    {
      id: "#1238",
      date: "08.06.2024",
      type: "transfer",
      amountUSD: "30 USD",
      amountLKR: "90,000 LKR",
      status: "Completed",
    },
  ];

  // Filter transactions based on the selected type
  const filteredTransactions =
    filterType === "all"
      ? transactions
      : transactions.filter((txn) => txn.type === filterType);

  return (
    <div className="w-full relative bg-[#090D1C] flex">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content on the right */}
      <div className="flex-1 p-6 ml-60">
        {/* Profile picture, notification, and wallet text container */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-[#cecdcd] font-roboto text-2xl">My wallet</div>
          <div className="flex items-center space-x-4">
            <div className="shadow-[0px_4px_31px_rgba(130,_155,_239,_0.48)] rounded-full bg-gradient-to-r from-[#49c8b7] to-[#446ae8] flex items-center justify-center py-1 px-2 opacity-80">
              <NotificationsNoneIcon className="text-white" />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[14px]">
                  15
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] bg-slate-400 rounded-full">
                <img
                  src={Profile}
                  alt="Profile_Image"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="ml-2 text-white">Devindi</p>
            </div>
          </div>
        </div>

        {/* Buttons aligned to the right */}
        <div className="flex justify-end space-x-4 mb-3">
          <button className="bg-[#829BEF] bg-opacity-20 hover:bg-[#829BEF] hover:bg-opacity-20 text-white py-2 px-4 rounded w-36">
            Overview
          </button>
          <button className="bg-[#ffffff] bg-opacity-20 hover:bg-[#829BEF] hover:bg-opacity-20 text-white py-2 px-4 rounded w-36">
            Transfer
          </button>
          <button className="bg-[#ffffff] bg-opacity-20 hover:bg-[#829BEF] hover:bg-opacity-20 text-white py-2 px-4 rounded w-36">
            Deposit
          </button>
          <button className="bg-[#ffffff] bg-opacity-20 hover:bg-[#829BEF] hover:bg-opacity-20 text-white py-2 px-4 rounded w-36">
            Withdraw
          </button>
        </div>

        {/* Time range buttons */}
        <div className="flex justify-end space-x-4 mb-3">
          <h1 className="text-white py-2 px-4 rounded-full hover:bg-[#829BEF] hover:bg-opacity-20">
            day
          </h1>
          <h1 className="text-white py-2 px-4 rounded-full hover:bg-[#829BEF] hover:bg-opacity-20">
            week
          </h1>
          <h1 className="text-white py-2 px-4 rounded-full hover:bg-[#829BEF] hover:bg-opacity-20">
            month
          </h1>
          <h1 className="text-white py-2 px-4 rounded-full hover:bg-[#829BEF] hover:bg-opacity-20">
            year
          </h1>
          <h1 className="text-white py-2 px-4 rounded-full hover:bg-[#829BEF] hover:bg-opacity-20">
            all
          </h1>
        </div>

        {/* Main content container */}
        <div className="flex">
          <div className="w-1/3 pr-4 h-[200px]">
            <div className="bg-[#829BEF] bg-opacity-20 p-4 rounded-lg h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-white text-2xl font-semibold flex items-center">
                    Available Balance
                    <VisibilityIcon
                      className="text-white ml-10"
                      fontSize="large"
                    />
                  </h2>
                </div>
                <p className="text-[#cecdcd] mt-6 text-4xl font-bold">
                  $5.2540 <span className="text-xl ml-8">USDT</span>
                </p>
                <p className="text-[#cecdcd] mt-4 text-xl">5.2540 LKR</p>
              </div>
            </div>
          </div>

          <div className="w-2/3 h-[250px]">
            <div className="w-full h-full p-4 rounded-lg flex items-center justify-center">
              <LineChart />
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#49C8B7] rounded-full ml-20"></div>
              <p className="text-white ml-2">Balance rate</p>
            </div>
          </div>
        </div>

        <div className="uppercase text-[12px] font-medium text-gray-400 mt-5">
          Transaction History
        </div>
        <div className="  justify-center mt-6 border p-10 border-[#ffffff] border-opacity-20">
          {/* Dropdown filter */}

          <div className="mb-4 relative">
          <div className="flex items-center text-white">
  <select
    value={filterType}
    onChange={(e) => setFilterType(e.target.value)}
    onFocus={() => setIsDropdownOpen(true)}  // Track when dropdown is open
    onBlur={() => setIsDropdownOpen(false)}   // Track when dropdown is closed
    className="p-2 rounded-none bg-transparent border-none appearance-none cursor-pointer"
  >
    {/* "All" option with white text */}
    <option value="all" className="text-white">
      All
    </option>

    {/* Other options with black text */}
    <option value="deposit" className="text-black">
      Deposit
    </option>
    <option value="transfer" className="text-black">
      Transfer
    </option>
    <option value="withdraw" className="text-black">
      Withdraw
    </option>
  </select>
  {/* Rotate the icon based on the dropdown open state */}
  <ChevronRightIcon
    className={`text-white ml-2 transform transition-transform rotate-90`}
  />
</div>

    </div>

          <div className="w-full max-w-[1100px] rounded-lg bg-[#829BEF] bg-opacity-20 p-4">
            {/* Table */}
            <div className="mt-2">
              <table className="w-full text-[12px] rounded-[7px]">
                <thead className="bg-gray-600">
                  <tr className="text-[#47b5d1]">
                    <th className="px-4 py-1 text-center">Id</th>
                    <th className="px-4 py-1 text-center">Date</th>
                    <th className="px-4 py-1 text-center">Type</th>
                    <th className="px-4 py-1 text-center">Amount(USD)</th>
                    <th className="px-4 py-1 text-center">Amount(LKR)</th>
                    <th className="px-4 py-1 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  {filteredTransactions.map((txn, index) => {
                    // Determine classes based on status
                    const statusWidth = "w-32";
                    let statusClasses = "";
                    let statusTextColor = "";

                    switch (txn.status) {
                      case "Completed":
                        statusClasses = `bg-green-500 bg-opacity-20 ${statusWidth}`;
                        statusTextColor = "text-green-500";
                        break;
                      case "Pending":
                        statusClasses = `bg-orange-500 bg-opacity-20 ${statusWidth}`;
                        statusTextColor = "text-orange-500";
                        break;
                      case "Declined":
                        statusClasses = `bg-red-500 bg-opacity-20 ${statusWidth}`;
                        statusTextColor = "text-red-500";
                        break;
                      default:
                        statusClasses = `bg-gray-500 bg-opacity-20 ${statusWidth}`;
                        statusTextColor = "text-gray-500";
                    }

                    return (
                      <tr key={index}>
                        <td className="px-4 py-2 text-center">{txn.id}</td>
                        <td className="px-4 py-2 text-center">{txn.date}</td>
                        <td className="px-4 py-2 text-center">
                          {txn.type === "withdraw" ? (
                            <div className="flex items-center justify-center">
                              {txn.type}
                              <img
                                src={withdrawIcon}
                                alt="Withdraw"
                                className="w-4 h-4 mr-2"
                              />
                            </div>
                          ) : txn.type === "transfer" ? (
                            <div className="flex items-center justify-center">
                              {txn.type}
                              <img
                                src={transferIcon}
                                alt="Transfer"
                                className="w-4 h-4 mr-2"
                              />
                            </div>
                          ) : txn.type === "deposit" ? (
                            <div className="flex items-center justify-center">
                              {txn.type}
                              <img
                                src={depositIcon}
                                alt="Transfer"
                                className="w-4 h-4 mr-2"
                              />
                            </div>
                          ) : (
                            txn.type
                          )}
                        </td>
                        <td className="px-4 py-2 text-center">
                          {txn.amountUSD}
                        </td>
                        <td className="px-4 py-2 text-center">
                          {txn.amountLKR}
                        </td>
                        <td className="px-4 py-2 text-center">
                          <span
                            className={`${statusClasses} ${statusTextColor} py-1 px-2 rounded-md shadow-md`}
                          >
                            {txn.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
