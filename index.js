// {/* <script>
//     // Array of pizza image sources
//     const pizzaImages = [
//         'pizza1.jpg',
//         'pizza2.jpg',
//         'pizza3.jpg',
//         // Add more image URLs as needed
//     ];

//     {/* let currentImageIndex = 0;

//     function changePizzaImage() { */}
//         // Change the source of the pizza image
//         document.getElementById('pizzaImage').src = pizzaImages[currentImageIndex];

//         // Increment the image index, and reset to 0 if it exceeds the array length
//     //     currentImageIndex = (currentImageIndex + 1) % pizzaImages.length;
//     {/* // } */}

//     // Set interval to call the changePizzaImage function every 3 seconds (3000 milliseconds)
//     setInterval(changePizzaImage, 3000);
// </script> */}

const pizzaImageList = [
    'img/pizza4.png',
    'img/pizza2.png',
    'img/pizza1.png',
    'img/grilled.png',



]
let currentImageIndex = 0

function displayPizzas() {
    console.log(`Before ${currentImageIndex}`)
    document.querySelector('#pizza-el').src = pizzaImageList[currentImageIndex]
  

    currentImageIndex = (currentImageIndex + 1) % pizzaImageList.length
    console.log(`after ${currentImageIndex}`)
}
setInterval(displayPizzas, 7000)
displayPizzas()


const navBtn = document.querySelector("#nav")
const dropDownEl = document.querySelector("#dropdown-el")

navBtn.addEventListener('click', function () {

    if (dropDownEl.style.display === 'block') {
        dropDownEl.style.display = 'none';
    } else {
        dropDownEl.style.display = 'block';
    }
})