"use client";
import { useState, useEffect } from "react";
import api from "@/lib/api/api";
import {
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { create } from "domain";

interface Todo {
  id: number;
  taskDesc: string;
  iscomplete: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await api.get<Todo[]>("/users");
    console.log(response.data);
    setTodos(response.data);
  };
  const addTodo = async () => {
    if (newTodo.trim() !== "") {
      const response = await api.post<Todo>("/users", {
        taskDesc: newTodo,
      });
      setNewTodo("");
      setTodos([...todos, response.data]);
      console.log(response.data);
    }
  };

  const editTodo = async (id: number) => {
    const todo = todos.find((t) => t.id === id)!;
    if (todo) {
      const updatedTodo = await api.patch<Todo>(`/users/${id}`, {
        ...todo,
        taskDesc: newTodo,
      });
      setTodos(
        todos.map((t) => (t.id === id ? { ...t, ...updatedTodo.data } : t))
      );
    }
  };

  const toggleTodoComplete = async (id: number) => {
    const todo = todos.find((t) => t.id === id)!;
    if (todo) {
      const updatedTodo = await api.patch<Todo>(`/users/${id}`, {
        ...todo,
        completed: !todo.iscomplete,
      });
      setTodos(
        todos.map((t) => (t.id === id ? { ...t, ...updatedTodo.data } : t))
      );
    }
  };

  const deleteTodo = async (id: number) => {
    console.log(id);
    await api.delete(`/users/${id}`);
    console.log(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>
      <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
        <TextField
          id="new-todo"
          label="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          variant="outlined"
          sx={{ mr: 2 }}
        />
        <Button variant="contained" onClick={addTodo}>
          Add Todo
        </Button>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 600 }}>
        {todos.map((todo) => (
          <Card key={todo.id} sx={{ mb: 2 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    checked={todo.iscomplete}
                    onChange={() => toggleTodoComplete(todo.id)}
                    color="primary"
                  />
                  <Typography>{todo.taskDesc}</Typography>
                </Box>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </Box>
              <Typography variant="caption">
                Created at: {todo.createdAt} | Updated at: {todo.updatedAt}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
