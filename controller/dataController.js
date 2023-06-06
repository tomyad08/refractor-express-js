const dataNama = [
  {
    id: 1,
    nama: "Tomy",
  },
  {
    id: 2,
    nama: "Adiansyah",
  },
  {
    id: 3,
    nama: "Aduh",
  },
];

const dataLengkap = (req, res) => {
  const result = {
    status: "oke",
    data: dataNama,
  };
  res.send(result);
};

let nama;
const dataId = (req, res) => {
  const { id } = req.params;
  dataNama.map((value) => {
    if (value.id === Number(id)) {
      nama = value;
    }

    if (nama === undefined) {
      return res
        .status(404)
        .json({ status: "empty", data: "data tidak ditemukan" });
    }
  });
  res.json({ nama });
};

const dataNamaUpdate = (req, res) => {
  //mendapatkan request body
  const { nama } = req.body;
  //mendapatkan new id
  const lastId = dataNama[dataNama.length - 1].id;
  const newId = lastId + 1;
  //menambahkan dataNama
  const newDataNama = { id: newId, nama: nama };
  dataNama.push(newDataNama);
  //mengembalikan response ke client
  res.status(201).json(dataNama);
};

module.exports = { dataLengkap, dataId, dataNamaUpdate };
