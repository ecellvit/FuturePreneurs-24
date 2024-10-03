'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import LoadingScreen from '@/components/LoadingScreen';
import img1 from '@/assests/assests/teammember.jpg';
import {MyModal} from '@/components/Modal';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '@/components/navbar';

export default function Page() {
  const { data: session, status } = useSession();
  const [teamName, setTeamName] = useState();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Full Name 1",
      regNo: "2XXXXXXXX",
      mobNo: "XXXXXXXXXX",
      buttonLabel: "Leave",
    },
    {
      id: 2,
      name: "Full Name 2",
      regNo: "2XXXXXXXX",
      mobNo: "XXXXXXXXXX",
      buttonLabel: "Remove",
    },
    {
      id: 3,
      name: "Full Name 3",
      regNo: "2XXXXXXXX",
      mobNo: "XXXXXXXXXX",
      buttonLabel: "Remove",
    },
    {
      id: 4,
      name: "Full Name 4",
      regNo: "2XXXXXXXX",
      mobNo: "XXXXXXXXXX",
      buttonLabel: "Remove",
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    setLoading(true);
    if (status == "unauthenticated") {
      setLoading(false);
      toast.error("Please Log in or Sign up");
      router.push("/");
    } else if (status == "authenticated") {
      setLoading(false);
      // router.push("/");
      getUserData();
    }
  }, [status, router]);

  const getUserData = () => {
    setLoading(true);
    fetch(`/api/userInfo`, {
      content: "application/json",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.accessTokenBackend}`,
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const user = data.user;
        if (user?.hasFilledDetails === true) {
          if (user?.teamId) {
            if (user?.teamRole == 0) {
              setLoading(false);
              router.push("/leaderDashboard");
            } else {
              setLoading(false)
            }
          } else {
            setLoading(false);
            router.push("/join&createTeam");
          }
        } else {
          setLoading(false);
          router.push("/userDetails");
        }
        fetch(`/api/userDataGet`, {
          content: "application/json",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.accessTokenBackend}`,
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setTeamName(data?.team?.teamName);
            setTeamMembers(data?.members);
            setLoading(false);
          })
          .catch((err) => {
            console.log("err", err);
            setLoading(false);
          });
      });
  };

  const handleLeave = async () => {
    setLoading(true);
    const res = await fetch("/api/leaveTeam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.accessTokenBackend}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        // teamName: teamName
      }),
    });

    if (res.status == 200) {
      setLoading(false);
      toast.success('Left the team successfully');
      router.push('/');
    } else {
      setLoading(false);
      toast.error("Error while leaving the team, please try again");
    }
  }

  return (
    <div className=" bg-[url(../assests/assests/bg_website.png)] bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-5 text-black pt-[12vh]">
      {loading && <LoadingScreen />}
      <Navbar/>
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center drop-shadow-lg">{teamName}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-screen-lg px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#141B2B] opacity-85 rounded-lg p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-between"
          >
            <img src={img1.src} alt="Team Member" className="w-24 h-24 mb-4 rounded-full shadow-md" />
            <h2 className="text-2xl text-white font-bold mb-2">{member?.name}</h2>
            <p className="text-xl text-white font-bold mb-2">{index===0?"Leader":"Member"}</p>
            <p className="text-sm text-white mb-1">Registration Number: {member?.regNo}</p>
            <p className="text-sm text-white">Mobile Number: {member?.mobNo}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => { 
          console.log('not working');
          handleShowModal(); }}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-10 rounded-full mt-8 text-lg font-semibold transition-colors duration-300 hover:bg-[#1e5db8] focus:outline-none"
      >
        Leave
      </button>
      {showModal && <MyModal
        isVisible={showModal}
        onClose={handleShowModal}  // Closes the modal on "No" or background click
        onConfirm={handleLeave}    // Calls handleLeave when "Yes" is clicked
        text="Do you want to leave this team?"
      />
      }
      <Toaster />
    </div>
  );
}