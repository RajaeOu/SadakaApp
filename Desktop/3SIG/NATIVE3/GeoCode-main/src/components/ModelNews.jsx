import React, { useState, useEffect } from 'react';

const ModalNews = ({ news, onClose, isAddingNew }) => {
  const [editedNews, setEditedNews] = useState({
    id: isAddingNew ? null : news.id,
    titre: isAddingNew ? '' : news.titre,
    description: isAddingNew ? '' : news.description,
    date: isAddingNew ? '' : news.date,
    image: isAddingNew ? '' : news.image,
  });

  useEffect(() => {
    // Mettez à jour l'état édité lorsque la prop news change (pour l'édition)
    if (!isAddingNew) {
      setEditedNews({
        id: news.id,
        titre: news.titre,
        description: news.description,
        date: news.date,
        image: news.image,
      });
    }
  }, [news, isAddingNew]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNews((prevNews) => ({
      ...prevNews,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Vous pouvez ajouter la logique pour enregistrer les modifications ou ajouter une nouvelle news ici
    console.log('Changes saved:', editedNews);

    // Fermer le modèle
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-full bg-gray-800 bg-opacity-50">
    <div className="relative w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700 p-8 transform ">
        <h3 className="text-2xl font-semibold mb-4">
          {isAddingNew ? 'Ajouter une nouvelle news' : 'Modifier la news'}
        </h3>
        <form>
          {/* Ajoutez des champs pour la nouvelle news ici */}
          {/* Exemple: Titre */}
          <div className="mb-4">
    <label htmlFor="titre" className="block text-sm font-medium text-gray-900">
      Titre
    </label>
    <input
      type="text"
      id="titre"
      name="titre"
      value={editedNews.titre}
      onChange={handleInputChange}
      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
    />
  </div>

  {/* Description */}
  <div className="mb-4">
    <label htmlFor="description" className="block text-sm font-medium text-gray-900">
      Description
    </label>
    <textarea
      id="description"
      name="description"
      value={editedNews.description}
      onChange={handleInputChange}
      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
    />
  </div>

  {/* Date */}
  <div className="mb-4">
    <label htmlFor="date" className="block text-sm font-medium text-gray-900">
      Date
    </label>
    <input
      type="text"
      id="date"
      name="date"
      value={editedNews.date}
      onChange={handleInputChange}
      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
    />
  </div>

  {/* Image */}
  <div className="mb-4">
    <label htmlFor="image" className="block text-sm font-medium text-gray-900">
      Image
    </label>
    <input
    type="file"
    id="image"
    name="image"
    
    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
  />
  </div>

          {/* ... (Autres champs pour la description, la date, l'image, etc.) */}

          <div className="flex justify-end space-x-4">
            {/* Bouton Enregistrer */}
            <button
              type="button"
              onClick={handleSaveChanges}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Enregistrer
            </button>
            {/* Bouton Annuler */}
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Annuler
            </button>
          </div>
        </form>

        {/* Bouton de fermeture du modèle */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModalNews;