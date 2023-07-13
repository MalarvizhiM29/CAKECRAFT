const Cake = require("../flavor/cake");

const getAllcakes = async (req, res, next) => {
  let cakes;
  try {
    cakes = await Cake.find();
  } catch (err) {
    console.log(err);
  }

  if (!cakes) {
    return res.status(404).json({ message: "No Cakes found" });
  }
  console.log(cakes);
  return res.send(cakes);
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let cake;
  try {
    cake = await Cake.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!cake) {
    return res.status(404).json({ message: "No Cake found" });
  }
  return res.status(200).json({ cake });
};

const addcake = async (req, res, next) => {
  const { image, name, weight, price } = req.body;
  let cake;
  try {
    cake = new Cake({
      image,
      name,
      weight,
      price,
    });
    await cake.save();
  } catch (err) {
    console.log(err);
  }

  if (!cake) {
    return res.status(500).json({ message: "Unable to Add" });
  }
  return res.status(201).json({ cake });
};

const updateCake = async (req, res, next) => {
  const id = req.params.id;
  const { image, name, weight, price } = req.body;
  let cake;
  try {
    cake = await Cake.findByIdAndUpdate(id, {
      image,
      name,
      weight,
      price,
    });
    cake = await cake.save();
  } catch (err) {
    console.log(err);
  }

  if (!cake) {
    return res.status(500).json({ message: "Unable to Update by this Id" });
  }
  return res.status(201).json({ cake });
};

const deletecake = async (req, res, next) => {
  const id = req.params.id;
  let cake;
  try {
    cake = await Cake.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!cake) {
    return res.status(500).json({ message: "Unable to Delete by this Id" });
  }
  return res.status(201).json({ message: "Product successfuly Deleted" });
};

exports.getAllcakes = getAllcakes;
exports.addcake = addcake;
exports.getById = getById;
exports.updateCake = updateCake;
exports.deletecake = deletecake;
