import { Link } from "react-router-dom";

const InfoLoanDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-xl font-semibold mb-4">For your Information:</h1>
        <img src="https://www.kumaribank.com/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75" alt="" />
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Education Loan :</h2>
          <p className="text-gray-700 mb-4">
            Bibaabo serves as a crucial bridge between students and banks,
            facilitating easy navigation through loan advisory services. Our
            online platform hosts a streamlined loan application process,
            eliminating the need for students to visit bank branches personally.
            With our consultancy services, the admin of consultancy can fill out
            an online loan application form. This process allows them to select
            the bank and the specific branch directly through our platform. This
            means students no longer have to visit bank branches themselves to
            request a loan. Currently, during the testing phase, the banks have
            provided us access to a limited number of branches. If the tests
            with these branches are successful, the banks will gradually open
            more branches for this service.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Himalayan Bank Limited :</h2>
          <p className="text-gray-700 mb-4">
            Himalayan Bank has partnered with Bibaabo to simplify the loan
            processing for its customers. In the initial testing phase,
            Himalayan Bank has selected branches within the valley for Bibaabo.
            To ensure quick and efficient processing as well as standardizing
            the process, the bank has initially opened only a few branches. Once
            the testing phase is successful, the bank will provide Bibaabo with
            access to branches nationwide.
          </p>
          <p className="text-gray-700">014227749, Kamaladi Kathmandu</p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Schemes:</h2>
          <div className="border-t border-b border-gray-300 py-4">
            <h3 className="text-md font-semibold mb-4">Himalayan Bank Education Loan</h3>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-4 md:mb-0 md:mr-6">
                <h4 className="text-md font-semibold mb-2">Features:</h4>
                <p className="text-gray-700">Interest Rate: 12.02% - 13.52%</p>
                <p className="text-gray-700">Base rate: 9.52%</p>
                <p className="text-gray-700">Processing Fee: 0.75% of Loan Limit</p>
                <p className="text-gray-700">Valuation Charge: As per valuator</p>
              </div>
              <div >
                <h4 className="text-md font-semibold mb-2">Required Documents:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Four passport-sized photographs of the loan applicant/Student</li>
                  <li>All academic transcripts and certificates up to date</li>
                  <li>Income proof (e.g., salary slips, tax returns)</li>
                  <li>Individual PAN certificate</li>
                  <li>If business (PAN & Business registration documents)</li>
                  <li>Valuation report from a bank-listed valuator</li>
                  <li>Land ownership document (Lapurja)</li>
                  <li>Land tax paid receipt</li>
                  <li>Original blueprint of the property</li>
                  <li>Original Charkilla (boundary map)</li>
                  <li>Google map photo of the collateral/residence</li>
                  <li>Relationship certificate (proving relationship to the applicant from ward office)</li>
                  <li>Offer letter from college/university</li>
                  <li>IELTS/PTE scorecard</li>
                  <li>PAN number of the applicant/collateral owner/income provider/student</li>
                  <li>Citizenship certificates of the applicant/collateral owner/income provider/student</li>
                  <li>Passport of the student</li>
                  <li>No objection letter for sending fees to the college/university</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="loan-form" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 hover:px-9">
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoLoanDetails;
