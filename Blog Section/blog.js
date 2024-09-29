// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });

    // Check if on post.html and load post content
    if (window.location.pathname.includes('post.html')) {
        const postId = new URLSearchParams(window.location.search).get('id');
        if (postId) {
            fetchPostContent(postId);
        }
    }
});

function fetchPostContent(postId) {
    // Simulate fetching post content from a database or file
    const posts = {
        post1: {
            title: "Get To Know What Italian Pizza Is Made From At Mikayi Point",
            content: `<img src="images/img1.jpg" alt="" class="post-img">
<p>Nestled in the heart of Kisumu County, Kenya, Mikayi Point is not just a scenic marvel but also a culinary haven. This unique spot, known for its legendary rock formations and cultural significance, now offers a delightful twist to its attractions—authentic Italian pizza.</p><br/><br/>
<h2>The Essence of Italian Pizza</h2>
<p>Italian pizza is celebrated worldwide for its simplicity and rich flavors. The foundation of any great pizza is its dough, made from high-quality flour, water, yeast, and a pinch of salt. The dough is kneaded to perfection and allowed to rise, resulting in a light, airy crust that is both crispy and chewy. .</p> <br/>
The sauce is another cornerstone of Italian pizza. Made from ripe tomatoes, garlic, olive oil, and a hint of basil, the sauce is cooked to a rich, tangy perfection. This simple yet flavorful base is what sets Italian pizza apart from its counterparts. <br/><br/>
<img src="images/img2.jpg" alt="" class="post-img">
<h2>Toppings That Tell a Story</h2>
At Mikayi Point, the pizza toppings are a blend of traditional Italian ingredients and local Kenyan flavors. Classic toppings include fresh mozzarella cheese, which melts beautifully to create a creamy, gooey layer. Other traditional toppings might include prosciutto, arugula, and a drizzle of extra virgin olive oil.
However, what makes the pizza at Mikayi Point truly special is the incorporation of local ingredients. Imagine a pizza topped with fresh, locally sourced vegetables, or even a hint of Kenyan spices that add a unique twist to the traditional Italian flavors.<br/><br/>
<h2>A Culinary Experience Like No Other</h2>
Enjoying Italian pizza at Mikayi Point is more than just a meal; it’s an experience. As you savor each bite, you can take in the breathtaking views of the rock formations and immerse yourself in the rich cultural history of the area. The combination of authentic Italian culinary techniques with local Kenyan ingredients creates a fusion that is both unique and unforgettable. <br/><br/>
<h2> Final Thought</h2>
So, the next time you find yourself at Mikayi Point, don’t miss the chance to indulge in a slice of Italy right in the heart of Kenya. It’s a culinary journey that promises to delight your taste buds and leave you craving for more. Buon appetito! 🍕<br/><br/>
`,
            date: "12 July 2024",
            category: "Tech",
            profileImage: "images/testi1.jpg",
            profileName: "Mocha Gabriel"
        },
        post2: {
            title: "How to create the best UX with Figma",
            content: "Full content of post 2...",
            date: "19 July 2024",
            category: "Food",
            profileImage: "images/testi2.jpg",
            profileName: "Mocha Gabriel"
        },
        post3: {
            title: "Why You Should Visit Mikayi Point Hotel This Weekend",
            content: "Full content of post 3...",
            date: "19 June 2024",
            category: "Food",
            profileImage: "images/testi3.jpg",
            profileName: "Mocha Gabriel"
        },
        // Add more posts as needed
    };

    const post = posts[postId];
    if (post) {
        document.querySelector('body').innerHTML = `
            <header>
                <div class="nav container">
                    <a href="index.html" class="logo"><span style="color: yellow;">Mikayi Point</span>  <span>Blog</span></a>
                </div>
            </header>

            <section class="post-content container">
                <h1>${post.title}</h1>
                <p class="post-date">${post.date}</p>
                <div class="post-category">${post.category}</div>
                <div class="post-full-content">${post.content}</div>
                <div class="profile">
                    <img src="${post.profileImage}" alt="" class="profile-img">
                    <span class="profile-name">${post.profileName}</span>
                </div>
            </section>

            <footer>
                <div class="footer-container">
                    <div class="sec aboutus">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quisquam minus quo illo numquam vel incidunt pariatur hic commodi expedita tempora praesentium at iure fugiat ea, quam laborum aperiam veritatis.</p>
                        <ul class="sci">
                            <li><a href="#"><i class="bx bxl-facebook"></i></a></li>
                            <li><a href="#"><i class="bx bxl-instagram"></i></a></li>
                            <li><a href="#"><i class="bx bxl-twitter"></i></a></li>
                            <li><a href="#"><i class="bx bxl-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div class="sec quicklinks">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="http://127.0.0.1:5501/index.html">Home</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                    <div class="sec contactBx">
                        <h2>Contact Info</h2>
                        <ul class="info">
                            <li>
                                <span><i class='bx bxs-map'></i></span>
                                <span>Kisumu County <br> Holo, Seme Sub-County<br> Kenya</span>
                            </li>
                            <li>
                                <span><i class='bx bx-envelope' ></i></span>
                                <p><a href="mailto:Info@themikayipoint.com">Info@themikayipoint.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        `;
    } else {
        document.querySelector('body').innerHTML = '<p>Post not found.</p>';
    }
}
