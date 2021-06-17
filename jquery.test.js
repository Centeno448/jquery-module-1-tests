import '@testing-library/jest-dom/extend-expect';
const $ = require('jquery');

beforeAll(() => {
  document.body.innerHTML = `
  <div class="container">
    <h2>Bienvenido al curso de jQuery</h2>

    <form name="listaCompras">
      <input type="text" name="itemCompras" />
    </form>

    <div id="button">Añadir ítem</div>
  </div>
    `;
  require('./index');
});

it('index.js cambia el valor del h2 al presionar el div id="Button" | Asegúrate de que al presionar el div id="Button" se cambie el valor del h2 a lo que colocaste en el input', () => {
  $('input[type="text"]').val('1');

  $('#button').click();

  expect($('h2').text()).toBe('1');
});
