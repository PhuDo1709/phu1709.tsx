import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Your Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">Manage your preferences and account.</p>
          <Button asChild className="mt-3">
            <Link href="/">Go Back Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}


