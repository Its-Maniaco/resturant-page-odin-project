import resturantImage from "../public/img/resturant.jpg";

export default function Home() {
    const content = document.getElementById("content");

    content.innerHTML = '';

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to The FooD Resturant";
    content.appendChild(heading);
    
    const resturantPhoto = document.createElement("img");
    resturantPhoto.src = resturantImage;
    resturantPhoto.alt = "Image to resturant";

    const description = document.createElement('p');
    description.textContent = "Come eat FooD at FooD Resturant."

    
    content.appendChild(resturantPhoto);
    content.appendChild(description);
} 