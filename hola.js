const hola = async () => {
  console.log(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test('Albim12345'))
}


hola()
