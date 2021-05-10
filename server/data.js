const quantity = () => {
  return Math.floor(Math.random() * 100).toString();
};

const parts = [...new Array(20)].map((part, id) => ({
  id: id + 1,
  part_file: { id: id + 1, file_name: `part-${id + 1}.stl`, units: 'mm' },
  quantity: quantity(),
}));

exports.parts = parts;
