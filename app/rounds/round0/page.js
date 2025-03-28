"use client";
import Loader from "@/components/LoadingScreen";
import AnswerForQualifier from "@/components/round0/Answer";
import Instructions from "@/components/round0/instructions";
import QualifierTimer from "@/components/round0/timer";
import QuestionForQualifier from "@/components/round0/Question";
import QuizEnd from "@/components/round0/quizend";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingIcons from "react-loading-icons";

export default function Qualifier() {
  const [questionCategory, setQuestionCategory] = useState("instruction");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [chronoNumber, setChronoNumber] = useState(0);
  const [teamName, setTeamName] = useState("ripun");
  const [finalAnswer, setFinalAnswer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  // useEffect(()=>{
  //   const fetchData = async () => {
  //     if (router.isReady) {
  //       if (status === "unauthenticated") {
  //           router.push("/");
  //       } else if (status === "authenticated") {
  //           try {
  //               const userData = await getUserData();
  //               const questionData = await getQuestionData();
  //           } catch (error) {
  //               // Handle errors if necessary
  //               console.error("Error fetching data:", error);
  //           }
  //       }
  //   }
  // };

  // fetchData();
  // },[]);
  
  useEffect(()=>{
    if(status==="unauthenticated"){
      router.push('/');
    }else if(status==="authenticated"){
      setIsLoading(true);
      getUserData();
      getQuestionData();
    }
  },[status])

  const autoSubmit = () => {
    setIsLoading(true);
    console.log('hii');
    setIsLoading(true);
    fetch(`/api/round0/autoSubmit`, {
      content: 'application/json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.accessTokenBackend}`,
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then(() => {
        setIsLoading(false);
      });
  };

  const getUserData = () => {
    console.log('hii');
    setIsLoading(false);
    fetch(`/api/userInfo`, {
      content: 'application/json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.accessTokenBackend}`,
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const user = data.user;
        // setIsLoading(false);
        if (user.hasFilledDetails) {
            if (user.teamId == null) {
              router.push('/');
            } else {
              if (user.teamRole != 0) {
                toast.error("Only leader's can access the quiz");
                router.push('/');
              } else {
                setIsLoading(false);
              }
            }
          }else{
            toast.error('Please register the Event first')
            router.push('/')
          }
        } 
      );
  };

  const handleSubmit = async() => {
    setIsLoading(true);
    console.log("submit button is clicked");
    console.log(finalAnswer);
    try {
      const response = await fetch("/api/round0/submitAnswer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        Authorization: `Bearer ${session.accessTokenBackend}`,
        "Access-Control-Allow-Origin": "*",
        body: JSON.stringify({
          answer: finalAnswer,
        }),
      });
      if (response.ok) {
        console.log(response);
        // location.reload();
        getQuestionData();
        setFinalAnswer([]);
        setIsLoading(false);
      } else {
        console.log("error");
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Server Error");
    }
  };

  const getQuestionData = () => {
    console.log("hello");
    setIsLoading(false);

    fetch(`/api/round0/getQuestion`, {
      content: "application/json",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessTokenBackend}`,
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setQuestionCategory(data.category);
        console.log('dddddddddddddddddddd',questionCategory);
        setQuestionNumber(data.questionNumber);
        console.log('gggdddd',data.questionNumber);
        setChronoNumber(data.chronoNumber);
        console.log('kkkkkkkkkkkkkkkkkkk',data.chronoNumber);
        setTeamName(data.teamName);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <main className="min-h-screen pt-[5rem] bg-[#0e0e0e] p-6">
      <section>
        {/* {isLoading && <Loader />} */}
        <div className="gap-2">
          {questionCategory === "instruction" && <Instructions />}
          {questionCategory !== "instruction" &&
            questionCategory !== "waiting" && (
              <div className="bg-[#0e0e0e]">
                <QualifierTimer teamName={teamName} autoSubmit={autoSubmit}/>
                <QuestionForQualifier
                  questionCategory={questionCategory}
                  questionNumber={questionNumber}
                  chronoNumber={chronoNumber}
                  setChronoNumber={setChronoNumber}
                  setQuestionNumber={setQuestionNumber}
                  className=""
                />
                <AnswerForQualifier
                  questionCategory={questionCategory}
                  questionNumber={questionNumber}
                  chronoNumber={chronoNumber}
                  finalAnswer={finalAnswer}
                  setChronoNumber={setChronoNumber}
                  setQuestionNumber={setQuestionNumber}
                  setFinalAnswer={setFinalAnswer}
                />
                <div className="w-full flex  justify-center items-center">
                  {(questionCategory === "hard" && chronoNumber === 9) ? (
                    <button
                      id="nextButton"
                      type="submit"
                      disabled={isLoading}
                      onClick={handleSubmit}
                      className="px-4 py-2  text-black rounded-full cursor-pointer bg-gradient-to-br from-[#DCA64E] via-[#FEFAB7] to-[#D6993F] mt-4 w-1/4 md:w-1/6 h-12 hover:scale-105 transition-all flex items-center justify-center font-bold"
                    >
                      {isLoading ? (
                        <LoadingIcons.Oval color="black" height="20px" />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  ) : (
                    <button
                      id="submitButton"
                      type="submit"
                      disabled={isLoading}
                      onClick={handleSubmit}
                      className="px-4 py-2 text-black rounded-full cursor-pointer bg-gradient-to-br from-[#DCA64E] via-[#FEFAB7] to-[#D6993F] mt-4 w-1/4 md:w-1/6 h-12 hover:scale-105 transition-all flex items-center justify-center font-bold"
                    >
                      {isLoading ? (
                        <LoadingIcons.Oval color="black" height="20px" />
                      ) : (
                        "Next"
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
          {questionCategory === "waiting" && <QuizEnd />}
        </div>
      </section>
    </main>
  );
}