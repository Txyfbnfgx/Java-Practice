function allButton(category)
{
  const button = document.querySelector(`.js-${category}-button`);

  if(!button.classList.contains('is-toggled'))
  {
    turnOffLastButton();
    button.classList.add('is-toggled');
  }
  else
  {
    button.classList.remove('is-toggled');
  }
}

function turnOffLastButton()
{
  const previousButton = document.querySelector('.is-toggled');
  if(previousButton) 
  {
    previousButton.classList.remove('is-toggled');
  }
}