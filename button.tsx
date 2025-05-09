// button.tsx
'use client';

import Link from 'next/link';
import { Button as UIButton } from '@/components/ui/button'; // ✅ Renamed to avoid conflict

export default function CustomButton() {
  return (
    <Link href="/dashboard">
      <UIButton className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Go to Dashboard
      </UIButton>
    </Link>
  );
}


