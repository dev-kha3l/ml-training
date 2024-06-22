"use client";
import { useState, useEffect } from "react";
import api from "@/lib/api/api";
import Link from "next/link";
import React from "react";
interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await api.get<Contact[]>("/contacts");
      setContacts(response.data);
    };
    fetchContacts();
  }, []);

  const handleDelete = async (id: number) => {
    await api.delete(`/contacts/${id}`);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4">Contact List</Typography>
        <Link href="/pages/contacts/create">
          <Button variant="contained" color="primary">
            Create Contact
          </Button>
        </Link>
      </Box>
      <List>
        {contacts.map((contact) => (
          <Box key={contact.id}>
            <ListItem
              secondaryAction={
                <>
                  <Link href={`/contacts/edit/${contact.id}`}>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(contact.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={`${contact.firstName} ${contact.lastName}`}
                secondary={`${contact.email} - ${contact.phone}`}
              />
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
}
