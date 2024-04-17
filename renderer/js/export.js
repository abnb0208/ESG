export_to_pdf.addEventListener('click', ()=>{
  search_container.style.display = 'none';
  result_container.style.display = 'none';
  window.print();
  search_container.style.display = 'block';
  result_container.style.display = 'block';
})
