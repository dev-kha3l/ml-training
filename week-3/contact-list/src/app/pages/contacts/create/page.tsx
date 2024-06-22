"use client";
import { useState } from "react";
import api from "@/lib/api/api";
import { useRouter } from "next/router";
import { Box, Button, TextField, Typography } from "@mui/material";
interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function CreateContact() {
  const [contact, setContact] = useState<
    Omit<Contact, "id" | "createdAt" | "updatedAt">
  >({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await api.post("/contacts", contact);
    router.push("/contacts");
  };

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Create Contact
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="First Name"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Last Name"
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={contact.email}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Phone"
            name="phone"
            type="tel"
            value={contact.phone}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </form>
    </Box>
  );
}
