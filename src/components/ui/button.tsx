import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <Button className="mt-3" onClick={() => router.push("/")}>
      Go Back Home
    </Button>
  );
};


