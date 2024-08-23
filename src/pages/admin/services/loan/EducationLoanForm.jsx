import { useState } from 'react';
import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import "nepali-datepicker-reactjs/dist/index.css"
import { Link } from 'react-router-dom';

const EducationLoanForm = () => {
  const [step, setStep] = useState(1);
  const [loanType, setLoanType] = useState("Non Disbursable");
  const [priority, setPriority] = useState("Low");
  const [date, setDate] = useState("")

    const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    email: '',
    mobileNumber: '',
    guardianContact: '',
    dobAD: '',
    dobBS: '',
    nationality: '',
    religion: '',
    permanentProvince: '',
    permanentDistrict: '',
    permanentLocalBody: '',
    permanentWard: '',
    permanentTole: '',
    permanentHouseNumber: '',
    currentProvince: '',
    currentDistrict: '',
    currentLocalBody: '',
    currentWard: '',
    currentTole: '',
    currentHouseNumber: '',
    highestEducation: '',
    isCurrentlyStudent: true,
    institutionName: '',
    institutionLocation: '',
    courseApplyingFor: '',
    studyDestination: '',
    agreement: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b-2 pb-4">Apply For Education Loan</h2>
      
      <div className="flex justify-between mb-6">
        <div className={`w-1/5 text-center ${step >= 1 ? 'text-blue-500' : 'text-gray-400'}`}>Service Info</div>
        <div className={`w-1/5 text-center ${step >= 2 ? 'text-blue-500' : 'text-gray-400'}`}>Student Info</div>
        <div className={`w-1/5 text-center ${step >= 3 ? 'text-blue-500' : 'text-gray-400'}`}>Address Info</div>
        <div className={`w-1/5 text-center ${step >= 4 ? 'text-blue-500' : 'text-gray-400'}`}>Educational Info</div>
        <div className={`w-1/5 text-center ${step >= 5 ? 'text-blue-500' : 'text-gray-400'}`}>Submit</div>
      </div>

      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">

        {step === 1 && (
          <>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Service Details</h2>
      
      <div className="bg-white p-4 mb-6 rounded-md shadow-inner">
        <p><strong>Service Type :</strong> Loan Service</p>
        <p><strong>Service :</strong> Education Loan</p>
        <p><strong>Service Provider :</strong> Kumari Bank Limited</p>
        <p><strong>Scheme :</strong> Kumari Education Loan</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Select Bank Branch (*) :</label>
          <select 
            className="block w-full p-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Select</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Type of Loan (*) :</label>
          <select 
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
          >
            <option>Non Disbursable</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Required Loan Amount (NPR) :</label>
          <input 
            type="text" 
            placeholder="Loan Amount" 
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Priority (*) :</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="priority" 
                className="form-radio text-blue-500" 
                value="High"
                onChange={() => setPriority("High")}
                checked={priority === "High"}
              />
              <span className="ml-2">High</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="priority" 
                className="form-radio text-blue-500" 
                value="Medium"
                onChange={() => setPriority("Medium")}
                checked={priority === "Medium"}
              />
              <span className="ml-2">Medium</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="priority" 
                className="form-radio text-blue-500" 
                value="Low"
                onChange={() => setPriority("Low")}
                checked={priority === "Low"}
              />
              <span className="ml-2">Low</span>
            </label>
          </div>
        </div>
      </div>

          </>
        )}

        {step === 2 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">First Name (*) :</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Middle Name :</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Last Name (*) :</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Gender (*) :</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleInputChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleInputChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Email (*) :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Mobile No. (*) :</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Date of Birth (AD) (*) :</label>
          <input
            type="date"
            name="dobAD"
            value={formData.dobAD}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Date of Birth (BS) :</label>
          <NepaliDatePicker
            type="text"
            name="dobBS"
            value={date}
            onChange={(e) => setDate(e)}
            options={{ calenderLocale: "ne", valueLocale: "en" }} 
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Contact Number of Guardian (If Any) :</label>
          <input
            type="text"
            name="guardianContact"
            value={formData.guardianContact}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Nationality :</label>
          <select
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Nepali">Nepali</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Religion :</label>
          <select
            type="text"
            name="religion"
            value={formData.nationality}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Hindu">Hindu</option>
            <option value="Islam">Islam</option>
            <option value="Christian">Christian</option>
            <option value="Buddhist">Buddhist</option>
          </select>
        </div>

       
      </div>
          </>
        )}

        {step === 3 && (
          <>
            
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Address Info</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Permanent Address:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Province (*) :</label>
            <select
              name="permanentProvince"
              value={formData.permanentProvince}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
            <option value="province1">Province 1</option>
            <option value="province2">Province 2</option>
            <option value="province3">Province 3</option>
            <option value="province4">Province 4</option>
            <option value="province5">Province 5</option>
            <option value="province6">Province 6</option>
            <option value="province7">Province 7</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">District (*) :</label>
            <input
              type="text"
              name="permanentDistrict"
              value={formData.permanentDistrict}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Local Body (*) :</label>
            <input
              type="text"
              name="permanentLocalBody"
              value={formData.permanentLocalBody}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Ward (*) :</label>
            <input
              type="text"
              name="permanentWard"
              value={formData.permanentWard}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Tole:</label>
            <input
              type="text"
              name="permanentTole"
              value={formData.permanentTole}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">House Number:</label>
            <input
              type="text"
              name="permanentHouseNumber"
              value={formData.permanentHouseNumber}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Current Address Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Current Address:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Province (*) :</label>
            <select
              name="currentProvince"
              value={formData.currentProvince}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="province1">Province 1</option>
              <option value="province2">Province 2</option>
              <option value="province3">Province 3</option>
              <option value="province4">Province 4</option>
              <option value="province5">Province 5</option>
              <option value="province6">Province 6</option>
              <option value="province7">Province 7</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">District (*) :</label>
            <input
              type="text"
              name="currentDistrict"
              value={formData.currentDistrict}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Local Body (*) :</label>
            <input
              type="text"
              name="currentLocalBody"
              value={formData.currentLocalBody}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Ward (*) :</label>
            <input
              type="text"
              name="currentWard"
              value={formData.currentWard}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Tole:</label>
            <input
              type="text"
              name="currentTole"
              value={formData.currentTole}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">House Number:</label>
            <input
              type="text"
              name="currentHouseNumber"
              value={formData.currentHouseNumber}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
          </>
        )}

        {step === 4 && (
          <>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Education Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Highest Education :</label>
          <select
            name="highestEducation"
            value={formData.highestEducation}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="SLC">SLC</option>
            <option value="+2">+2</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="phd">PHD</option>
          </select>
        </div>
        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-600 mr-4">Are You Currently a Student (*) :</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="isCurrentlyStudent"
                value="yes"
                checked={formData.isCurrentlyStudent}
                onChange={() => setFormData({ ...formData, isCurrentlyStudent: true })}
                className="form-radio h-4 w-4 text-blue-500"
              />
              <span className="ml-2">YES</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isCurrentlyStudent"
                value="no"
                checked={!formData.isCurrentlyStudent}
                onChange={() => setFormData({ ...formData, isCurrentlyStudent: false })}
                className="form-radio h-4 w-4 text-blue-500"
              />
              <span className="ml-2">NO</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Current(Last) Educational Institution (*) :</label>
          <input
            type="text"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleInputChange}
            placeholder="School / College Name"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Location (*) :</label>
          <input
            type="text"
            name="institutionLocation"
            value={formData.institutionLocation}
            onChange={handleInputChange}
            placeholder="School / College Location"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Course/Program Applying For :</label>
          <input
            type="text"
            name="courseApplyingFor"
            value={formData.courseApplyingFor}
            onChange={handleInputChange}
            placeholder="Course / Program"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Desired Study Destination :</label>
          <select
            name="studyDestination"
            value={formData.studyDestination}
            onChange={handleInputChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Australia">Australia</option>
            
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleInputChange}
            className="form-checkbox h-4 w-4 text-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">
            By submitting this form, I confirm that the information provided above is accurate to the best of my knowledge, and I agree to be contacted by representatives of the education loan provider for further assistance.
          </span>
        </label>
      </div>

      
          </>
        )}

        {step === 5 && (
          <>
            <div className="flex flex-col items-center">
              <p className="text-center text-gray-600 mb-4">
                By submitting this form, I confirm that the information provided above is accurate to the best of my knowledge, and I agree to be contacted by representatives of the education loan provider for further assistance.
              </p>
              <Link to="/admin" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Submit
              </Link>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Previous
          </button>
        )}
        {step < 5 && (
          <button
            onClick={nextStep}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default EducationLoanForm;
