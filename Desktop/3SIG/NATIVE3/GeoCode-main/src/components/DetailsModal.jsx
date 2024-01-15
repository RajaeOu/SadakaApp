import React from 'react';
import ReactModal from 'react-modal';
import { format } from 'date-fns';
const Modal = ({ ad, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      ariaHideApp={false}
      className="modal-overlay fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
      overlayClassName="modal-content max-w-2xl w-full bg-white text-gray-800 rounded-lg overflow-hidden p-6 z-50"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {ad.titre}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <strong>Description:</strong> {ad.description}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <strong>Utilisateur:</strong> {`${ad.utilisateur.nom} ${ad.utilisateur.prenom}` }
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <strong>Date:</strong> {format(new Date(ad.date), 'dd/MM/yyyy')}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <strong>Categorie:</strong> {ad.categorie.nom}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <strong>Quantite:</strong> {ad.quantite}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <strong>Commune:</strong> {ad.commune}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <strong>Statut:</strong> {ad.statut}
            </p>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
           
            <button
              onClick={onClose}
              type="button"
              className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;