import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpdateImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      console.log("File uploaded:", selectedFile);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 flex flex-col border-r-2 border-red-300">
          <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
          <div className='flex flex-col items-center'>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile"
              className="rounded-full w-24 h-24 mb-4"
            />
            <button className="bg-cyan-500 text-white px-4 py-2 rounded-full mb-4">
              Institution
            </button>
            <h3 className="text-lg font-semibold mb-2">Not Yet</h3>
            <p className="text-gray-600">9807948315</p>
            <p className="text-gray-600">Rahulmandalr456@gmail.com</p>
            <div className="flex items-center mt-2">
              <AiOutlineCheckCircle className="text-green-500 mr-2" />
              <span className="text-green-500 font-semibold">VERIFIED</span>
            </div>
            <button 
              onClick={handleUpdateImageClick}
              className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded w-full"
            >
              Update Image
            </button>
            <Link to="/admin/my-details/updateProfile" className="mt-2 bg-gray-300 text-gray-700 py-2 px-4 rounded w-full">
              Update Details
            </Link>
          </div>
        </div>
        <div className="p-4 ">
           <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
          <p><strong>Province:</strong> Province 1</p>
          <p><strong>District:</strong> Jhapa</p>
          <p><strong>Local Body:</strong> Kamal Ga. Pa.</p>
          <p><strong>Ward No:</strong> 5</p>
          <p><strong>Street:</strong> </p>
        </div>
          <h3 className="text-xl font-semibold mb-2">Institution Details</h3>
          <p><strong>Company Name:</strong> Not Yet</p>
          <p><strong>Business Type:</strong> Consultancy</p>
          <p><strong>Associated With:</strong> ecan</p>
          <p><strong>PAN/VAT:</strong> 344 4545 5455</p>
          <p><strong>Register Number:</strong> 2345 7645 3444</p>
          <p><strong>Company Phone:</strong></p>
          <p><strong>Company Email:</strong> rahul123@gmail.com</p>
          <p><strong>Company Website:</strong></p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Upload Profile Image</h3>
            <input type="file" onChange={handleFileChange} className="mb-4" />
            {selectedFile && (
              <p className="text-sm text-gray-600 mb-4">Selected file: {selectedFile.name}</p>
            )}
            <div className="flex justify-end">
              <button
                onClick={handleUploadClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mr-2"
              >
                Upload
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
