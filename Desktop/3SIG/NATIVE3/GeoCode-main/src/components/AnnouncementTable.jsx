import React, { useState } from 'react';

const AnnouncementTable = ({ commune, handleDetailsClick }) => {
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);

  const handleDetailsButtonClick = (annonce) => {
    setSelectedAnnonce(annonce);
    handleDetailsClick(annonce); // Appeler la fonction passée depuis le parent
  };

  return (
    <div className="w-40%">
      <h2 className="text-2xl font-bold mb-4">{commune.nom}</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Titre</th>
            <th className="px-4 py-2">Catégorie</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Détails</th>
          </tr>
        </thead>
        <tbody>
          {commune.annonces.map((annonce) => (
            <tr key={annonce.id}>
              <td className="border px-4 py-2">{annonce.titre}</td>
              <td className="border px-4 py-2">{annonce.categorie}</td>
              <td className="border px-4 py-2">{annonce.date}</td>
              <td className="border px-4 py-2">
                <button className="text-blue-500 hover:underline" onClick={() => handleDetailsButtonClick(annonce)}>
                  Détails
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnnouncementTable;
