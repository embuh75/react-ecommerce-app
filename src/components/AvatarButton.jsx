import React from 'react'

export default function AvatarButton({handleAvatar, user, avatar}) {
  return (
    <button
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 hover:cursor-pointer active:scale-95 transition-all duration-300"
      onClick={() => handleAvatar()}
    >
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
        <img
          src="/nekoarch.png"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="text-left leading-tight">
        <span className="text-sm font-bold block">{user}</span>
        <p className="text-slate-500 text-xs font-semibold">Roles</p>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center">
        <img
          src={avatar ? `/arrow-up.svg` : `/arrow-down.svg`}
          alt="drop-down"
          className="w-5 h-5"
        />
      </div>
    </button>
  );
}
