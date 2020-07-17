import getObjectDescription from ['./prueba2'];

describe('Test unitarios de nuestro módulo "getObjectDescription"', () => {


  it('getObjectDescription to be truthy, () => {

    expect(getObjectDescription).toBeTruthy();
  });

  it("getObjectDescription('ACTIVE') to be 'Activo'", () => {
  const result = getObjectDescription('ACTIVE');
  expect(result).toBe('Activo'); 
  });

it("getObjectDescription('DRAFT') to be false", () => {
  const result = getObjectDescription('DRAFT');
  expect(result).toBeFalsy(); 
  });

  it("getObjectDescription('') to be false", () => {
  const result = getObjectDescription();
expect(result).toBeFalsy(); 
  });

  it("getObjectDescription() to be 'El argumento 'type' no existe'", () => {
    const result = getObjectDescription();
    expect(result).toBe('El argumento 'type' no existe');
  }); 

} );
