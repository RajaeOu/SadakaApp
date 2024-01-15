// UserTable.js
import React, { useState } from 'react';
import ModalNews from './ModelNews';

const newsData = 
    [
        {
          "id": 1,
          "titre": "Newsletter d'octobre 2023",
          "description": "Découvrez les dernières actualités et mises à jour du mois d'octobre.",
          "date": "2023-10-15",
          "image":  "base64-encoded-image-data"
            
          
        },
        {
          "id": 2,
          "titre": "Nouvelles fonctionnalités à venir",
          "description": "Préparez-vous pour les nouvelles fonctionnalités passionnantes prévues pour le prochain mois.",
          "date": "2023-11-01",
          "image":  "base64-encoded-image-data"
        },
        {
          "id": 3,
          "titre": "Récapitulatif des événements passés",
          "description": "Revivez les moments forts des récents événements et conférences.",
          "date": "2023-09-28",
          "image":  "base64-encoded-image-data"
        }
        // Ajoutez d'autres newsletters au besoin
      
      
  // Ajoutez plus d'utilisateurs selon vos besoins
];

const NewsTable = () => {
  const [news, setNews] = useState(newsData);
  const [selectedNew, setSelectedNew] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 
  
  const handleEditClick = (newl) => {
    setSelectedNew(newl);
  };

  const handleAddNewClick = () => {
    setIsAddingNew(true);
  };

  const handleCloseModal = () => {
    setSelectedNew(null);
    setIsAddingNew(false);
  };
  // Get current news
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

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
          placeholder="Search for news"
        />

        <button
          onClick={handleAddNewClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
        >
          Ajouter une nouvelle news
        </button>

        {/* Tableau d'utilisateurs */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {/* En-tête de la table */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                Titre
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
           
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {news.map((newl) => (
              <tr key={newl.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         
                <td className="px-6 py-4">
                  {/* Affichage de l'email */}
                  {newl.id}
                </td>
                <td className="px-6 py-4">
                 
                    {newl.titre}
                  
                </td>
                <td className="px-6 py-4">
                  {/* Affichage du rôle */}
                  {newl.date}
                </td>
                <td className="px-6 py-4">
                  {/* Bouton d'édition */}
                  <button onClick={() => handleEditClick(newl)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Détails
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
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>

            {Array.from({ length: Math.ceil(news.length / itemsPerPage) }).map(
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
                disabled={currentPage === Math.ceil(news.length / itemsPerPage)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border rounded-e-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
        {/* Modèle d'édition d'utilisateur */}
        {(selectedNew || isAddingNew) && (
          <ModalNews news={selectedNew} onClose={handleCloseModal} isAddingNew={isAddingNew} />
        )}
      </div>
    </div>
  );
};

export default NewsTable;
