const randomQuantity = () => {
  return Math.floor(Math.random() * 100).toString();
};

const parts = [...new Array(20)].map((part, id) => ({
  id: id,
  part_file: {
    id: id,
    file_name: `part-${id}.stl`,
    units: 'mm',
  },
  quantity: randomQuantity(),
}));

exports.parts = parts;
