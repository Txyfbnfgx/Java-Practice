
/*String(25)
console.log('25' - 5);
console.log('25' + 5);

window.document
window.console.log('window');
window.alert*/

function handleCostKeyDown(event)
{
  if(event.key === 'Enter')
  {
    calculateTotal();
  }
}

function calculateTotal()
{
  const inputElement = document.querySelector('.js-cost-input');
  const outputElement = document.querySelector('.js-total-cost');
  let cost = Number(inputElement.value);

  if(cost < 0)
  {
    outputElement.classList.add('error-msg');
    document.querySelector('.js-total-cost').innerHTML = 'Error: cost cannot be less than $10';
  }
  else
  {
    outputElement.classList.remove('error-msg');
    cost = cost < 40 ? cost = cost + 10 : cost;
    document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
  }

}

function subscribe()
{
  
  const buttonElement = document.querySelector('.js-subscribe-button');

  if(buttonElement.innerText === 'Subscribe')
  {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  }
  else
  {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }

}