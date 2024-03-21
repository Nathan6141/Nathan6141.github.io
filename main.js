const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was a blazing 94 fahrenheit out in the field, so :insertx: went for a short swim to cool off. When they got to :inserty: to swim, they stared in disbelief, then :insertz:. His friend witnessed what had happened, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
let insertx = ['Williamson','Paul','Christian'];
let inserty = ['pool','pond','waterpark']
let insertz = ['sprinted away','paused for a while','began to float into the ether']

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replaceAll("Bob", name);
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(300/14) + 'stones';
      const temperature =  Math.round((94-32) * 5/9) + 'celsius';
      
      newStory = newStory.replaceAll('94 fahrenheit', temperature);
      newStory = newStory.replaceAll('300 pounds', weight);
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }

