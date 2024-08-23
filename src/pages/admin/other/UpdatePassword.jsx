import { useState } from 'react';
import { AiOutlineLock } from 'react-icons/ai';

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password updated');
  };

  return (
    <><hr className="my-2" />
    <div className="flex p-4">
       
      <div className="bg-gray-100 p-6 md:p-8 rounded shadow-md  max-w-md">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex">
          <AiOutlineLock className="mr-2" />
          Change Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="oldPassword">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <p className="text-sm text-gray-600 mt-2">
              Password must be at least 8 characters long and contain at least one uppercase letter.
            </p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
          >
            Update
          </button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default UpdatePassword;
