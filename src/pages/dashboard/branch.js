import React from "react";

const BranchSelection = ({ onSelect }) => {
  const branches = [
    { id: 1, name: "Headquarters - Chennai" },
    { id: 2, name: "Branch - Bangalore" },
    { id: 3, name: "Branch - Hyderabad" },
  ];

  const handleSelectBranch = (branch) => {
    localStorage.setItem("selectedBranch", JSON.stringify(branch));
    onSelect(branch);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-5xl bg-sidebar-primary rounded-2xl shadow-xl p-10">
        {/* Company Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://app.hrbuddie.com/static/media/appLogo.51cb590670f1ac176e12700077e30ee8.svg"
            alt="HRMS Logo"
            className="w-40"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Select Your Branch
        </h1>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="group relative p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow hover:shadow-lg cursor-pointer border border-gray-200 hover:border-blue-500 transition-all duration-300"
              onClick={() => handleSelectBranch(branch)}
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl opacity-0 group-hover:opacity-100 transition" />
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-sidebar-primary">
                {branch.name}
              </h2>
              <p className="text-sm text-gray-500 mt-2">Click to continue</p>
            </div>
          ))}
        </div>

        {/* Footer / Note */}
        <p className="mt-10 text-center text-sm text-white">
          Please select your branch to continue to the dashboard.
        </p>
      </div>
    </div>
  );
};

export default BranchSelection;
