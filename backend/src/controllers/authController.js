// Purpose: Handles authentication (login & register)
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AppDataSource } = require("../config/data-source");
const { User } = require("../entities/User");

const JWT_SECRET = process.env.JWT_SECRET || "my_super_secret_key_2024";

// REGISTER - First user becomes admin, others become users
const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const userRepo = AppDataSource.getRepository(User);

    // Check if user already exists
    const existingUser = await userRepo.findOneBy({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Count total users
    const userCount = await userRepo.count();
    
    // FIRST USER = ADMIN, everyone else = USER
    const role = userCount === 0 ? "admin" : "user";

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = userRepo.create({
      email,
      password: hashedPassword,
      name,
      role, // ← This is the key!
    });

    const savedUser = await userRepo.save(user);

    // Generate token
    const token = jwt.sign(
      { id: savedUser.id, email: savedUser.email, role: savedUser.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    const { password: _, ...safeUser } = savedUser;

    res.status(201).json({
      message: "User registered successfully!",
      user: safeUser,
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN - Check credentials and return user with role
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    const { password: _, ...safeUser } = user;

    res.json({ user: safeUser, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET current user
const getMe = async (req, res) => {
  try {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ id: req.user.id });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { password: _, ...safeUser } = user;
    res.json(safeUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login, getMe };