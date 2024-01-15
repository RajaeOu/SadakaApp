import React, { useState,useEffect } from 'react';
import { parseISO,format } from 'date-fns';
import { getOrderStatus } from '../lib/helpers';
import axios from 'axios';




export default function RecentOrders() {
  const [annonceData, setAnnonceData] = useState([]);
  const [filteredStatut, setFilteredStatut] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);

  const annoncesPerPage = 5; // Changez cela selon le nombre d'annonces que vous voulez afficher par page

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:8084/annonces/all_annonces') // Replace with your actual backend API endpoint
      .then(response =>
        {console.log(response.data); setAnnonceData(response.data)})
      .catch(error => console.error('Error fetching annonces:', error));
  }, []);


    // Filtrer les annonces selon le statut
    const filteredAnnonces = annonceData.filter((annonce) => {
      if (filteredStatut === 'Tous') {
        return true;
      }
      return annonce.statut === filteredStatut;
    });
  

  // Pagination
  const indexOfLastAnnonce = currentPage * annoncesPerPage;
  const indexOfFirstAnnonce = indexOfLastAnnonce - annoncesPerPage;
  const currentAnnonces = filteredAnnonces.slice(indexOfFirstAnnonce, indexOfLastAnnonce);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  const handleDetailsClick = (annonce) => {
    setSelectedAnnonce(annonce);
    document.getElementById('static-modal').classList.remove('hidden');
  };

  const handleModalHide = () => {
    setSelectedAnnonce(null);
    document.getElementById('static-modal').classList.add('hidden');
  };

  const handleValidation = (action) => {

    if (!selectedAnnonce || selectedAnnonce.statut === 'Validée') {
      // No action needed for already validated announcements
      handleModalHide();
      return;
    }
    if (!selectedAnnonce || selectedAnnonce.statut === 'Rejetée') {
      // No action needed for already validated announcements
      handleModalHide();
      return;
    }
  
    const updatedStatus = action === 'Valider' ? 'Validée' : 'Rejetée';
  
    // Make a request to update the status
    axios.put(`http://localhost:8084/annonces/${selectedAnnonce.id}/updateStatut`, {
      statut: updatedStatus,
    })
    
      .then(response => {
        console.log(`Status updated successfully: ${response.data}`);
        // Update the local state or refetch data as needed
        // For example, you might want to refetch all annonces after updating the status
        axios.get('http://localhost:8084/annonces/all_annonces')
          .then(response => setAnnonceData(response.data))
          .catch(error => console.error('Error fetching annonces:', error));
        handleModalHide();
      })
      .catch(error => {
        console.error('Error updating status:', error);
        // Handle error as needed
      });
  };
  

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Annonces</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        {/* Filtrer par statut */}
        <div className="flex justify-end mb-3">
          <label className="mr-2">Filtrer par statut:</label>
          <select
            className="border rounded p-1"
            value={filteredStatut}
            onChange={(e) => setFilteredStatut(e.target.value)}
          >
            <option value="Tous">Tous</option>
            <option value="Validée">Validée</option>
            <option value="Rejetée">Rejetée</option>
            <option value="En attente">En attente</option>
          </select>
        </div>

        {/* Tableau d'annonces */}
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titre</th>
              <th>Catégorie</th>
              <th>Date</th>
              <th>Description</th>
              <th>Statut</th>
              <th>Détails</th>
            </tr>
          </thead>
          <tbody>
            {currentAnnonces.map((annonce) => (
              <tr key={annonce.id}>
                <td>{annonce.id}</td>
                <td>{annonce.titre}</td>
                <td>{annonce.categorie.nom}</td>
                <td>{format(parseISO(annonce.date),'dd/MM/yyyy')}</td>
                <td>{annonce.description}</td>
                <td>{annonce.statut}</td>
                <td>
                  <button onClick={() => handleDetailsClick(annonce)}>Détails</button>
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

            {Array.from({ length: Math.ceil(filteredAnnonces.length / annoncesPerPage) }).map(
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
                disabled={currentPage === Math.ceil(filteredAnnonces.length / annoncesPerPage)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border rounded-e-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>

        
        {/* Modal */}
        <div
          id="static-modal"
          data-modal-backdrop="static"
          tabIndex="-1"
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-full"
          >
          {/* ... (contenu du modal) */}
          {selectedAnnonce && (
          <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Détails de l'annonce
        </h3>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={handleModalHide}
        >
          {/* ... (icône de fermeture) */}
        </button>
      </div>
      
      <form className="p-4 md:p-5 space-y-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Titre
          </label>
          <p className="text-base text-gray-500 dark:text-gray-400">{selectedAnnonce.titre}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Catégorie
          </label>
          <p className="text-base text-gray-500 dark:text-gray-400">{selectedAnnonce.categorie.nom}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Quantité
          </label>
          <p className="text-base text-gray-500 dark:text-gray-400">{selectedAnnonce.quantite}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Date
          </label>
          <p className="text-base text-gray-500 dark:text-gray-400">
            {format(parseISO(selectedAnnonce.date), 'dd/MM/yyyy')}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Utilisateur
          </label>
          <p className="text-base text-gray-500 dark:text-gray-400">{`${selectedAnnonce.utilisateur.nom} ${selectedAnnonce.utilisateur.prenom}`}</p>
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Commune : 
          </label>
      <p className="text-base text-gray-500 dark:text-gray-400">{selectedAnnonce.commune}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <p className="text-base text-gray-500 dark:text-gray-400">{selectedAnnonce.description}</p>
        </div>
       
        </form>                

        <img src={selectedAnnonce.photo?.base64} alt="Annonce" className="w-full h-auto" />

        {selectedAnnonce.photo?.base64 && (
                  <img
                    src={selectedAnnonce.photo.base64}
                    alt={selectedAnnonce.titre}
                    className="w-full h-auto"
                  />
                )}
      <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
        {selectedAnnonce.statut === 'En attente' && (
          <>
            <button
              type="button"
              className={`text-white ${
                selectedAnnonce.statut === 'Validée' ? 'bg-gray-400' : 'bg-green-700'
              } hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800`}
              onClick={() => handleValidation('Valider')}
            >
              Valider
            </button>
            <button
              type="button"
              className={`ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none ${
                selectedAnnonce.statut === 'Validée' ? 'border-gray-400' : 'border-red-500'
              } rounded-lg border text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:focus:ring-gray-600`}
              onClick={() => handleValidation('Rejeter')}
            >
              Rejeter
            </button>
          </>
        )}
        <button
          type="button"
          className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:focus:ring-gray-600"
          onClick={handleModalHide}
        >
          Annuler
        </button>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
}
