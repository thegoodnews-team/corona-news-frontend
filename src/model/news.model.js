export default obj => {
  const data = obj || [];
  console.log(obj);
  // Vai retornar o objeto tratado
  return data.map(({ link, linkImg, title }) => {
    return { link, linkImg, title };
  });
};
