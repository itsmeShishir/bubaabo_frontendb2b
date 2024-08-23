import { Link } from "react-router-dom";

const BankLoanService = () => {
  const banks = [
    { id: 1, name: "Kumari Bank Limited", logo: "https://www.kumaribank.com/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75" },
    { id: 2, name: "Himalayan Bank Limited", logo: "https://www.himalayanbank.com/images/HBL-Logo.jpg" },
    { id: 3, name: "Nepal SBI Bank Limited", logo: "https://nsbl.statebank/image/layout_set_logo?img_id=5931268&t=1724292922359" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Select Bank</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {banks.map((bank) => (
          <div
            key={bank.id}
            className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
          >
            <Link to='bank-loan' className="flex flex-col items-center justify-center">
              <img src={bank.logo} alt={`${bank.name} logo`} className="w-[290px] h-auto mr-4" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-700">{bank.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankLoanService;
