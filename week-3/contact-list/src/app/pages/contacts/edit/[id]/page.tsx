"use client";
import { useState, useEffect } from "react";
import api from "@/lib/api/api";
import { useRouter } from "next/router";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Inter } from "next/font/google";

export default function EditContact() {
  const [contact, setContact] = useState<Contact>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    createdAt: "",
    updatedAt: "",
  });

  interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
  }
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchContact = async () => {
      const response = await api.get<Contact>(`/contacts/${id}`);
      setContact(response.data);
    };
    if (typeof id === "string") {
      fetchContact();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await api.patch(`/contacts/${contact.id}`, contact);
    router.push("/contacts");
  };

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Edit Contact
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
          Update
        </Button>
      </form>
    </Box>
  );
}
