import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { Button, Container, Typography } from "@mui/material";

export default function Chat() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/auth/login");
    return null;
  }

  return (
    <Container className="mt-10">
      <Typography variant="h5">سلام {user.username}، به چت خوش آمدید!</Typography>
      <Button variant="contained" color="secondary" onClick={logout} className="mt-4">
        خروج از حساب
      </Button>
    </Container>
  );
}
