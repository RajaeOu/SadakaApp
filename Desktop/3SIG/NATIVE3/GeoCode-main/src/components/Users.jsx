// UserTable.js
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import EditUserModal from './EditUserModal';



const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);
  const [searchTerm , setSearchTerm] = useState('');
 

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  useEffect(() => {
  const fetchUsers = async () => {
    let response =null;
    try {
  
      let apiUrl;
     
      // If debouncedSearchTerm is not empty, use the search endpoint

        apiUrl = `http://localhost:8084/utilisateur/all_users?page=${currentPage}`;
      
  
      console.log('API URL:', apiUrl); // Log the constructed API URL
  
      response = await axios.get(apiUrl);
      console.log('Response:', response.data); // Log the response data
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };
  fetchUsers();
  

  
}, [currentPage]);




 
  


  console.log(users);
  console.log(searchTerm);



  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  

  // Get current users
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users ? users.slice(indexOfFirstItem, indexOfLastItem) : [];

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container mx-auto mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* Barre de recherche */}
        
        <input
          type="text"
          className="block w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Search for users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
     
        

        {/* Tableau d'utilisateurs */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {/* En-tête de la table */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user)=> (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full ml-3" src="/docs/images/people/profile-picture-1.jpg" alt={`${user.nom} ${user.prenom} image`} /></div>

                </td>
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* Affichage du nom et prénom */}
                  {/* Affichage de l'image du profil */}
                  <div className="text-base font-semibold">{`${user.nom} ${user.prenom}`}</div>

                </td>
                <td className="px-6 py-4">
                  {/* Affichage de l'email */}
                  {user.login}
                </td>
                <td className="px-6 py-4">
                  {/* Affichage du statut */}
                  <div className="flex items-center">
                    <div className={`h-2.5 w-2.5 rounded-full ${user.statut === 'Active' ? 'bg-green-500' : 'bg-red-500'} me-2`}></div>
                    {user.statut}
                  </div>
                </td>
                <td className="px-6 py-4">
                  {/* Affichage du rôle */}
                  {user.role}
                </td>
                <td className="px-6 py-4">
                  {/* Bouton d'édition */}
                  <button onClick={() => handleEditClick(user)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
 {/* Pagination */}
 <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 0}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>

          {Array.from({ length: Math.ceil(users.length / itemsPerPage) }).map(
            (item, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border ${
                    currentPage === index + 1
                      ? 'border-gray-300 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                      : 'border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}

          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(users.length / itemsPerPage)}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border rounded-e-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

        {/* Modèle d'édition d'utilisateur */}
        {selectedUser && (
          <EditUserModal user={selectedUser} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default UserTable;
