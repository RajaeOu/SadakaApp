// EditUserModal.js
import React, { useState } from 'react';
import axios from 'axios';

const EditUserModal = ({ user, onClose }) => {
  // État local pour gérer les modifications dans le formulaire
  const [editedUser, setEditedUser] = useState({
    prenom: user.prenom,
    nom: user.nom,
    login: user.login,
    statut: user.statut,
    role: user.role,
  });

  // Fonction pour mettre à jour l'état local lorsqu'un champ du formulaire est modifié
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Fonction pour gérer la sauvegarde des modifications
  const handleSaveChanges = () => {
    // Envoie des modifications à l'API backend
    axios.put(`http://localhost:8084/utilisateur/edit/${user.id}`, editedUser)
      .then((response) => {
        console.log('User updated successfully', response.data);
        // Vous pouvez également ajouter une logique supplémentaire ici si nécessaire

        // Fermer le modèle après la mise à jour
        onClose();
      })
      .catch((error) => {
        console.error('Error updating user', error);
        // Gérer les erreurs ici si nécessaire
      });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-full bg-gray-800 bg-opacity-50">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700 p-8 transform ">
        {/* Contenu du modèle d'édition d'utilisateur */}
        {/* Contenu du modèle d'édition d'utilisateur */}
        <h3 className="text-2xl font-semibold mb-4">Edit User</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
              Prenom
            </label>
            <input
              type="text"
              id="firstName"
              name="prenom"
              value={editedUser.prenom}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="nom"
              value={editedUser.nom}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="login"
              value={editedUser.login}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-900">
              Statut
            </label>
            <input
              type="text"
              id="status"
              name="statut"
              value={editedUser.statut}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-900">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={editedUser.role}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="flex justify-end space-x-4">
            {/* Bouton Save */}
            <button
              type="button"
              onClick={handleSaveChanges}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
            {/* Bouton Cancel */}
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
        {/* Bouton de fermeture du modèle */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EditUserModal;
