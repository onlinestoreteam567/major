import { useState } from 'react';

import TypeService from '@services/TypeService.js';
import CategoryService from '@services/CategoryService.js';
import UserService from '../../services/UserService';

const Requests = () => {
  const [typeId, setTypeId] = useState('');
  const [typeName, setTypeName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  // Type Service Methods
  const handleOnGetTypes = () => {
    TypeService.getTypes().then((res) => {
      console.log('Fetched Types:', res);
    });
  };

  const handleOnCreateType = () => {
    TypeService.createType(typeName).then((res) => {
      console.log('Created Type:', res);
    });
  };

  const handleOnGetTypeById = () => {
    TypeService.getTypeById(typeId).then((res) => {
      console.log('Fetched Type by ID:', res);
    });
  };

  const handleOnUpdateTypeById = () => {
    TypeService.updateTypeById(typeId, { name: typeName }).then((res) => {
      console.log('Updated Type:', res);
    });
  };

  const handleOnPatchTypeById = () => {
    TypeService.patchTypeById(typeId, { name: typeName }).then((res) => {
      console.log('Patched Type:', res);
    });
  };

  const handleOnDeleteTypeById = () => {
    TypeService.deleteTypeById(typeId).then((res) => {
      console.log('Deleted Type:', res);
    });
  };

  // Category Service Methods
  const handleOnGetCategories = () => {
    CategoryService.getCategories().then((res) => {
      console.log('Fetched Category:', res);
    });
  };

  const handleOnCreateCategory = () => {
    CategoryService.createCategory(categoryName).then((res) => {
      console.log('Created Category:', res);
    });
  };

  const handleOnGetCategoryById = () => {
    CategoryService.getCategoryById(categoryId).then((res) => {
      console.log('Fetched Category by ID:', res);
    });
  };

  const handleOnUpdateCategoryById = () => {
    CategoryService.updateCategoryById(categoryId, { name: categoryName }).then((res) => {
      console.log('Updated Category:', res);
    });
  };

  const handleOnPatchCategoryById = () => {
    CategoryService.patchCategoryById(categoryId, { name: categoryName }).then((res) => {
      console.log('Patched Category:', res);
    });
  };

  const handleOnDeleteCategoryById = () => {
    CategoryService.deleteCategoryById(categoryId).then((res) => {
      console.log('Deleted Category:', res);
    });
  };

  // User Service Methods (new section)
  const handleOnGetUsers = () => {
    UserService.getUsers().then((res) => {
      console.log('Fetched Users:', res);
    });
  };

  const handleOnCreateUser = () => {
    UserService.createUser(userName).then((res) => {
      console.log('Created User:', res);
    });
  };

  const handleOnGetUserById = () => {
    UserService.getUserById(userId).then((res) => {
      console.log('Fetched User by ID:', res);
    });
  };

  const handleOnUpdateUserById = () => {
    UserService.updateUserById(userId, { name: userName }).then((res) => {
      console.log('Updated User:', res);
    });
  };

  const handleOnPatchUserById = () => {
    UserService.patchUserById(userId, { name: userName }).then((res) => {
      console.log('Patched User:', res);
    });
  };

  const handleOnDeleteUserById = () => {
    UserService.deleteUserById(userId).then((res) => {
      console.log('Deleted User:', res);
    });
  };

  return (
    <div>
      <h1>Test Type, Category & User API Requests</h1>

      {/* Inputs for testing TypeService */}
      <div>
        <input type="text" placeholder="Type ID" value={typeId} onChange={(e) => setTypeId(e.target.value)} />
        <input type="text" placeholder="Type Name" value={typeName} onChange={(e) => setTypeName(e.target.value)} />
      </div>

      {/* Buttons for TypeService */}
      <div>
        <button onClick={handleOnGetTypes}>Fetch Types</button>
        <button onClick={handleOnCreateType}>Create Type</button>
        <button onClick={handleOnGetTypeById}>Get Type by ID</button>
        <button onClick={handleOnUpdateTypeById}>Update Type by ID</button>
        <button onClick={handleOnPatchTypeById}>Patch Type by ID</button>
        <button onClick={handleOnDeleteTypeById}>Delete Type by ID</button>
      </div>

      <hr />

      {/* Inputs for testing CategoryService */}
      <div>
        <input
          type="text"
          placeholder="Category ID"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </div>

      {/* Buttons for CategoryService */}
      <div>
        <button onClick={handleOnGetCategories}>Fetch Category</button>
        <button onClick={handleOnCreateCategory}>Create Category</button>
        <button onClick={handleOnGetCategoryById}>Get Category by ID</button>
        <button onClick={handleOnUpdateCategoryById}>Update Category by ID</button>
        <button onClick={handleOnPatchCategoryById}>Patch Category by ID</button>
        <button onClick={handleOnDeleteCategoryById}>Delete Category by ID</button>
      </div>

      <hr />

      {/* Inputs for testing UserService */}
      <div>
        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <input type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>

      {/* Buttons for UserService */}

      <div>
        <button onClick={handleOnGetUsers}>Fetch Users</button>
        <button onClick={handleOnCreateUser}>Create User</button>
        <button onClick={handleOnGetUserById}>Get User by ID</button>
        <button onClick={handleOnUpdateUserById}>Update User by ID</button>
        <button onClick={handleOnPatchUserById}>Patch User by ID</button>
        <button onClick={handleOnDeleteUserById}>Delete User by ID</button>
      </div>
    </div>
  );
};

export default Requests;
