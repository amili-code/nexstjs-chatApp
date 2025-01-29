import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "", profile: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register Data:", form);
    router.push("/auth/login"); // بعداً اینجا درخواست به API اضافه می‌شود
  };

  return (
    <Container maxWidth="xs" className="mt-10">
      <Typography variant="h5" className="text-center">
        ثبت‌نام
      </Typography>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4">
        <TextField label="یوزرنیم" name="username" fullWidth onChange={handleChange} />
        <TextField label="پسورد" name="password" type="password" fullWidth onChange={handleChange} />
        <TextField label="آدرس پروفایل (اختیاری)" name="profile" fullWidth onChange={handleChange} />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          ثبت‌نام
        </Button>
      </form>
      <Button onClick={() => router.push("/auth/login")} fullWidth className="mt-2">
        حساب دارید؟ وارد شوید
      </Button>
    </Container>
  );
}
