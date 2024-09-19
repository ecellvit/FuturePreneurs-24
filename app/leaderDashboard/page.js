'use client';
import React, { useEffect, useState } from 'react';
import img1 from '@/assests/assests/teammember.jpg';
import { useRouter } from 'next/navigation';
import MyModal from '@/Components/Modal';
import { useSession } from 'next-auth/react'
import LoadingScreen from '@/components/LoadingScreen';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {

  useEffect(()=>{
     getData();
  },[])
  const router = useRouter();
  const {data:session,status}= useSession();

  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Full Name 1', regNo: '2XXXXXXXX', mobNo: 'XXXXXXXXXX', buttonLabel: 'Leave' },
    { id: 2, name: 'Full Name 2', regNo: '2XXXXXXXX', mobNo: 'XXXXXXXXXX', buttonLabel: 'Remove' },
    { id: 3, name: 'Full Name 3', regNo: '2XXXXXXXX', mobNo: 'XXXXXXXXXX', buttonLabel: 'Remove' },
    { id: 4, name: 'Full Name 4', regNo: '2XXXXXXXX', mobNo: 'XXXXXXXXXX', buttonLabel: 'Remove' },
  ]);

  const [teamName,setTeamName] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMemberId, setModalMemberId] = useState(null);
  const [modalType, setModalType] = useState(''); 
  const [loading,setLoading] = useState(false);

  const getData = async()=>{
    setLoading(true);
    const res = await fetch('/api/userDataGet',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        },
        
      Authorization: `Bearer ${session?.accessTokenBackend}`,
      "Access-Control-Allow-Origin": "*",
    })
    const data = await res.json();
    setTeamName(data.team.teamName);
    setTeamMembers(data.members);
    setLoading(false);
  }

 
  const handleShowModal = (id = null, type = '') => {
    setModalMemberId(id); 
    setModalType(type);
    setShowModal(true);
  };

 
  const handleCloseModal = () => {
    setModalMemberId(null);
    setModalType('');
    setShowModal(false);
  };

  
  const handleRemove = async(index) => {
    setLoading(true);
    console.log('clicked');
    console.log(index);
    try {
      console.log("inside fetch");
      const response = await fetch(`/api/removeMember`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session?.accessTokenBackend,
        },
        body: JSON.stringify({ index }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success('Team Member is removed');
        setLoading(false);
        window.location.reload();
      } else {
        showMessage("Team code not found. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      showMessage("An error occurred while fetching team name.");
      setLoading(false);
    }
    // const updatedTeamMembers = teamMembers.filter((member) => member.id !== modalMemberId);
    // setTeamMembers(updatedTeamMembers);
    handleCloseModal();
  };

  const handleAddTeamMember = () => {
    router.push('/teamDetails');
  };

  return (
    <div className="bg-white bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-4 text-black">
      {loading && <LoadingScreen/>}
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center drop-shadow-lg">{teamName}</h1>
      
   
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl px-4 py-6 bg-black bg-opacity-50 rounded-lg shadow-lg">
        {teamMembers.map((member,index) => (
          <div
            key={index}
            className="bg-[#141B2B] rounded-lg p-3 text-center shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-between"
          >
            <img src={img1.src} alt="Team Member" className="w-16 h-16 mb-3 rounded-full shadow-md" />
            <h2 className="text-lg font-bold mb-1">{member.name}</h2>
            <p className="text-xs mb-1">Reg. No.: {member.regNo}</p>
            <p className="text-xs">Mobile No.: {member.mobNo}</p>
            <button
              className="bg-blue-600 text-white py-1 px-4 rounded-full mt-2 font-semibold transition-colors duration-300 hover:bg-[#1e5db8] focus:outline-none text-sm"
              onClick={() => handleShowModal(index, 'remove')} 
            >
              {index==0 ? 'Leave' : 'Remove'}
            </button>
          </div>
        ))}
      </div>

     
      {teamMembers.length < 4 && (
        <div className="flex justify-center mt-4 w-full">
          <button
          className="bg-green-600 text-white py-2 px-6 rounded-full font-semibold transition-colors duration-300 hover:bg-green-700 focus:outline-none shadow-lg text-[0.9rem] max-w-[150px]"
            
            onClick={() => handleShowModal(null, 'add')} 
          >
            Add Member
          </button>
        </div>
      )}

     
      {showModal && (
        <MyModal
          isVisible={true}
          onClose={handleCloseModal}  
          onConfirm={()=>{
            if(modalType=='remove'){
              console.log(modalMemberId);
              handleRemove(modalMemberId);
            }else{
              handleAddTeamMember();
            }
          }} 
          text={modalType === 'remove' ? "Do you want to remove this member?" : "Do you want to add a member?"}
        />
      )}
      <Toaster/>
    </div>
  );
}
