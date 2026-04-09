router.post('/signup', async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      username,
      email,
      password: hashedPassword,
      role: role || 'user'
    });

    await user.save();
    res.json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).send("Server error");
  }
});