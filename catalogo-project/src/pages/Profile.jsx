import React from "react";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const profiles = [
    { id: 1, name: "Sherk", avatar: "https://tm.ibxk.com.br/2025/01/11/11093920444004.jpg?ims=1200xorig" },
    { id: 2, name: "Barbie", avatar: "https://images.tcdn.com.br/img/img_prod/1126610/barbie_o_filme_boneca_de_colecao_western_outfit_2101_2_dae907c3667c99a4c9e245bebb5567e3.png" },
    { id: 3, name: "Mcqueen", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NTqz-Qgbn2W5A_hQuoGKEb1EgTirlaXFmg&s" },
  ];

  const navigate = useNavigate();

  const handleProfileClick = (profileName) => {
    navigate("/"); 
  };

  const handleAddProfile = () => {
    alert("Adicionar novo perfil");
  };

  const handleManageProfiles = () => {
    alert("Gerenciar perfis");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">Quem está assistindo?</h1>
      <div className="flex gap-6">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => handleProfileClick(profile.name)}
            className="group flex flex-col items-center gap-2 cursor-pointer"
          >
            <img
              src={profile.avatar}
              alt={`${profile.name} avatar`}
              className="w-24 h-24 rounded-full border-2 border-gray-700 transition-transform transform group-hover:scale-110"
            />
            <span className="text-lg font-medium">{profile.name}</span>
          </button>
        ))}
        <button
          onClick={handleAddProfile}
          className="group flex flex-col items-center gap-2"
        >
          <div className="cursor-pointer w-24 h-24 flex items-center justify-center rounded-full border-2 border-gray-700 text-4xl font-bold text-gray-400 hover:text-white hover:border-gray-500 transition-all">
            +
          </div>
          <span className="text-lg font-medium text-gray-400 group-hover:text-white">
            Adicionar
          </span>
        </button>
      </div>
      <button
        onClick={handleManageProfiles}
        className="mt-8 text-lg underline hover:text-gray-400 transition-colors cursor-pointer"
      >
        Gerenciar Perfis
      </button>
    </div>
  );
}
