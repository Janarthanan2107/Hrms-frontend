const HelpDesk = () => {
    const faqs = [
        { category: "Leave & Attendance", question: "How do I apply for leave?", answer: "Go to the Leave module > Apply Leave > Submit." },
        { category: "Payroll", question: "When will my salary be credited?", answer: "Salaries are processed on the last working day of every month." },
        { category: "IT Support", question: "How to reset my password?", answer: "Click on 'Forgot Password' at login and follow instructions." },
    ];

    const tickets = [
        { id: 1, subject: "Unable to mark attendance", status: "Open" },
        { id: 2, subject: "Payslip not generated", status: "In Progress" },
        { id: 3, subject: "Leave balance incorrect", status: "Resolved" },
    ];

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Help Desk</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Get assistance with HR, Payroll, IT, and more
                </p>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Search for help..."
                    className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm 
                     focus:ring-2 focus:ring-blue-500 focus:outline-none
                     bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 
                     text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                />
            </div>

            {/* FAQ Section */}
            <div>
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
                    Frequently Asked Questions
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition
                         bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        >
                            <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                                {faq.category}
                            </h3>
                            <p className="font-medium text-gray-800 dark:text-gray-100">
                                {faq.question}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ticket Section */}
            <div>
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
                    My Tickets
                </h2>

                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-left border border-b">
                            <tr>
                                <th className="px-6 py-3 font-semibold">Ticket ID</th>
                                <th className="px-6 py-3 font-semibold">Subject</th>
                                <th className="px-6 py-3 font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {tickets.map((ticket) => (
                                <tr
                                    key={ticket.id}
                                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-100">
                                        #{ticket.id}
                                    </td>
                                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                                        {ticket.subject}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 text-xs font-medium rounded-full 
                  ${ticket.status === "Open"
                                                    ? "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
                                                    : ticket.status === "In Progress"
                                                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400"
                                                        : "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
                                                }`}
                                        >
                                            {ticket.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/40 dark:to-gray-900 
                border border-blue-200 dark:border-blue-800 
                rounded-xl p-6 shadow-md">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                    Need Immediate Assistance?
                </h2>
                <div className="space-y-2 text-sm">
                    <p className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="mr-2">📧</span>
                        <span className="font-medium">support@tecnospice.com</span>
                    </p>
                    <p className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="mr-2">📞</span>
                        <span className="font-medium">+91 98765 43210</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HelpDesk;
