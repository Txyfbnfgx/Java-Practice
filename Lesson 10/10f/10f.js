function allButton(category)
{
  const button = document.querySelector(`.js-${category}-button`);

  if(!button.classList.contains('is-toggled'))
  {
    button.classList.add('is-toggled');
  }
  else
  {
    button.classList.remove('is-toggled');
  }
}
