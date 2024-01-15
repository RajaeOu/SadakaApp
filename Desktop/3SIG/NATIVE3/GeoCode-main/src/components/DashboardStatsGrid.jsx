import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoClipboardOutline, IoPieChart, IoCashSharp, IoPeople, IoCart } from 'react-icons/io5';

export default function DashboardStatsGrid() {
  const [totalAnnouncements, setTotalAnnouncements] = useState(0);
  const [totalBeneficiaries, setTotalBeneficiaries] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    
    axios.get('http://localhost:8084/annonces/nombre')
      .then(response => {
		console.log('Response data:', response.data);
		setTotalAnnouncements(response.data)})
      .catch(error => console.error('Error fetching total announcements:', error));

    axios.get('http://localhost:8084/demandes/nombre')
      .then(response => setTotalBeneficiaries(response.data))
      .catch(error => console.error('Error fetching total beneficiaries:', error));

    axios.get('http://localhost:8084/utilisateur/nombre-utilisateurs')
      .then(response => setTotalUsers(response.data))
      .catch(error => console.error('Error fetching total users:', error));
  }, []);
  console.log(totalAnnouncements);
  console.log(totalBeneficiaries);
  console.log(totalUsers);
  return (
    <div className="flex gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoClipboardOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total des Annonces</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{totalAnnouncements}</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoCashSharp className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total des Bénéficiaires</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{totalBeneficiaries}</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total des utilisateurs</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{totalUsers}</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>;
}
