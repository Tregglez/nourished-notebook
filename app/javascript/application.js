// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import "trix";
import "@rails/actiontext";
import Sortable from 'sortablejs';

document.addEventListener('turbo:load', () => {
  document.addEventListener('click', (event) => {
    let element = event.target.closest('.paragraph-content');
    if (!element) return;

    element.classList.add('d-none');
    element.nextElementSibling.classList.remove('d-none');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.matches('.cancel')) return;

    event.preventDefault();

    let element = event.target.closest('.paragraph-form');

    element.classList.add('d-none');
    element.previousElementSibling.classList.remove('d-none');
  });

  let sortable_elements = document.getElementById('elements');
  Sortable.create(sortable_elements, { animation: 150 });
});
