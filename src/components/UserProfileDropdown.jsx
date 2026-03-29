import React from 'react'

export default function UserProfileDropdown({user, signOut}) {
  return (
    <div className="absolute z-50 top-20 right-0">
      <div className="w-56 bg-white rounded-md shadow-md overflow-hidden">
        {/* User Info */}
        <div className="px-4 py-3">
          <span className="text-sm font-bold block">{user}</span>
          <p className="text-slate-500 text-xs font-semibold">Roles</p>
        </div>

        {/* Divider */}
        <div className="border-t" />

        {/* Action */}
        <button
          onClick={() => signOut()}
          className="w-full text-left px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100 hover:text-red-600 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
