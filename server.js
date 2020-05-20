// Dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());