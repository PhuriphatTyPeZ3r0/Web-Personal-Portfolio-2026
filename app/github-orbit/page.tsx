import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft, FaGithub } from 'react-icons/fa6';
import { GithubOrbitScene } from '@/components/GithubOrbitScene';

export const metadata: Metadata = {
  title: 'GitHub Skills Orbit | PhuriphatTyPeZ3r0',
  description: 'An interactive 3D orbit of PhuriphatTyPeZ3r0\'s core tech stack, built with three.js and react-three-fiber.',
};

export default function GithubOrbitPage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#101014]">
      <GithubOrbitScene />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-col items-center gap-2 px-4 pt-8 text-center">
        <h1 className="font-orbitron uppercase italic font-black tracking-widest text-lg sm:text-2xl text-[#c0caf5] drop-shadow-[0_0_12px_rgba(122,162,247,0.6)]">
          GitHub Skills Orbit
        </h1>
        <p className="text-[11px] sm:text-xs tracking-wide text-[#7dcfff]/80">
          Drag to rotate &middot; Scroll to zoom &middot; Auto-rotating
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-wrap justify-center items-center gap-3 px-4 pb-6">
        <Link
          href="/"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-orbitron uppercase tracking-widest text-[#22d3ee] transition-all hover:text-white"
          style={{
            background: 'rgba(11, 19, 41, 0.85)',
            border: '1px solid rgba(34, 211, 238, 0.6)',
            boxShadow: '0 0 16px rgba(34, 211, 238, 0.3)',
          }}
        >
          <FaArrowLeft size={12} />
          Back to Portfolio
        </Link>
        <Link
          href="https://github.com/PhuriphatTyPeZ3r0"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-orbitron uppercase tracking-widest text-[#c0caf5] transition-colors hover:text-[#7aa2f7]"
          style={{
            background: 'rgba(26, 27, 39, 0.75)',
            border: '1px solid rgba(122, 162, 247, 0.5)',
            boxShadow: '0 0 16px rgba(122, 162, 247, 0.25)',
          }}
        >
          GitHub Profile
          <FaGithub size={14} />
        </Link>
      </div>
    </main>
  );
}
