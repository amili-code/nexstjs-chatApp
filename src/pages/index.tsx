import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push("/auth/login")}
      >
        شروع چت
      </Button>
    </div>
  );
}
