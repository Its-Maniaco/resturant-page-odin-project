export default function Home() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.content = "Welcome to The FooD Resturant";

    const resturantImage = document.createElement("img");
    resturantImage.src = "../public/img/resturant.jpg";
    resturantImage.alt = "Image to resturant";

    const description = document.createElement('p');
    description.textContent = "Come eat FooD at FooD Resturant."

    content.appendChild(heading);
    content.appendChild(resturantImage);
    content.appendChild(description);
}