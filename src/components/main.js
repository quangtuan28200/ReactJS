/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div>
                <main id="main">
                    {/* ======= About Section ======= */}
                    <section id="about" className="about">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5 align-items-stretch video-box" style={{ backgroundImage: 'url("assets/img/about.jpg")' }}>
                                    <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
                                </div>
                                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                                    <div className="content">
                                        <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                        </p>
                                        <p className="font-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i className="bx bx-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="bx bx-check-double" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="bx bx-check-double" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                        </ul>
                                        <p>
                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End About Section */}
                    {/* ======= Whu Us Section ======= */}
                    <section id="why-us" className="why-us">
                        <div className="container">
                            <div className="section-title">
                                <h2>Why choose <span>Our Restaurant</span></h2>
                                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="box">
                                        <span>01</span>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-4 mt-lg-0">
                                    <div className="box">
                                        <span>02</span>
                                        <h4>Repellat Nihil</h4>
                                        <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-4 mt-lg-0">
                                    <div className="box">
                                        <span>03</span>
                                        <h4> Ad ad velit qui</h4>
                                        <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Whu Us Section */}
                    {/* ======= Menu Section ======= */}
                    <section id="menu" className="menu">
                        <div className="container">
                            <div className="section-title">
                                <h2>Check our tasty <span>Menu</span></h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="menu-flters">
                                        <li data-filter="*" className="filter-active">Show All</li>
                                        <li data-filter=".filter-starters">Starters</li>
                                        <li data-filter=".filter-salads">Salads</li>
                                        <li data-filter=".filter-specialty">Specialty</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row menu-container">
                                <div className="col-lg-6 menu-item filter-starters">
                                    <div className="menu-content">
                                        <a href="#">Lobster Bisque</a><span>$5.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </div>
                                </div>
                                <div className="col-lg-6 menu-item filter-specialty">
                                    <div className="menu-content">
                                        <a href="#">Bread barrel</a><span>$6.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </div>
                                </div>
                                <div className="col-lg-6 menu-item filter-starters">
                                    <div className="menu-content">
                                        <a href="#">Crab Cake</a><span>$7.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                                    </div>
                                </div>
                                <div className="col-lg-6 menu-item filter-salads">
                                    <div className="menu-content">
                                        <a href="#">Caesar Selections</a><span>$8.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </div>
                                </div>
                                <div className="col-lg-6 menu-item filter-specialty">
                                    <div className="menu-content">
                                        <a href="#">Tuscan Grilled</a><span>$9.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Grilled chicken with provolone, artichoke hearts, and roasted red pesto
                                    </div>
                                </div>
                                <div className="col-lg-6 menu-item filter-starters">
                                    <div className="menu-content">
                                        <a href="#">Mozzarella Stick</a><span>$4.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </div>
                                </div>
                                <div className="col-lg-6 menu-item filter-salads">
                                    <div className="menu-content">
                                        <a href="#">Greek Salad</a><span>$9.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Fresh spinach, crisp romaine, tomatoes, and Greek olives
                                    </div>
                                </div>
                                <div className="col-lg-6 menu-item filter-salads">
                                    <div className="menu-content">
                                        <a href="#">Spinach Salad</a><span>$9.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
                                    </div>
                                </div>
                                <div className="col-lg-6 menu-item filter-specialty">
                                    <div className="menu-content">
                                        <a href="#">Lobster Roll</a><span>$12.95</span>
                                    </div>
                                    <div className="menu-ingredients">
                                        Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Menu Section */}
                    {/* ======= Specials Section ======= */}
                    <section id="specials" className="specials">
                        <div className="container">
                            <div className="section-title">
                                <h2>Check our <span>Specials</span></h2>
                                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <ul className="nav nav-tabs flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link active show" data-toggle="tab" href="#tab-1">Modi sit est</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tab-2">Unde praesentium sed</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-9 mt-4 mt-lg-0">
                                    <div className="tab-content">
                                        <div className="tab-pane active show" id="tab-1">
                                            <div className="row">
                                                <div className="col-lg-8 details order-2 order-lg-1">
                                                    <h3>Architecto ut aperiam autem id</h3>
                                                    <p className="font-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                                </div>
                                                <div className="col-lg-4 text-center order-1 order-lg-2">
                                                    <img src="assets/img/specials-1.jpg" alt className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tab-2">
                                            <div className="row">
                                                <div className="col-lg-8 details order-2 order-lg-1">
                                                    <h3>Et blanditiis nemo veritatis excepturi</h3>
                                                    <p className="font-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                    <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                                                </div>
                                                <div className="col-lg-4 text-center order-1 order-lg-2">
                                                    <img src="assets/img/specials-2.jpg" alt className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tab-3">
                                            <div className="row">
                                                <div className="col-lg-8 details order-2 order-lg-1">
                                                    <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                                    <p className="font-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                                    <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                                                </div>
                                                <div className="col-lg-4 text-center order-1 order-lg-2">
                                                    <img src="assets/img/specials-3.jpg" alt className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tab-4">
                                            <div className="row">
                                                <div className="col-lg-8 details order-2 order-lg-1">
                                                    <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                                    <p className="font-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                                                    <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                                                </div>
                                                <div className="col-lg-4 text-center order-1 order-lg-2">
                                                    <img src="assets/img/specials-4.jpg" alt className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tab-5">
                                            <div className="row">
                                                <div className="col-lg-8 details order-2 order-lg-1">
                                                    <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                                    <p className="font-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                                    <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                                                </div>
                                                <div className="col-lg-4 text-center order-1 order-lg-2">
                                                    <img src="assets/img/specials-5.jpg" alt className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Specials Section */}
                    {/* ======= Events Section ======= */}
                    <section id="events" className="events">
                        <div className="container">
                            <div className="section-title">
                                <h2>Organize Your <span>Events</span> in our Restaurant</h2>
                            </div>
                            <div className="owl-carousel events-carousel">
                                <div className="row event-item">
                                    <div className="col-lg-6">
                                        <img src="assets/img/event-birthday.jpg" className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                        <h3>Birthday Parties</h3>
                                        <div className="price">
                                            <p><span>$189</span></p>
                                        </div>
                                        <p className="font-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="icofont-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        </ul>
                                        <p>
                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur
                                        </p>
                                    </div>
                                </div>
                                <div className="row event-item">
                                    <div className="col-lg-6">
                                        <img src="assets/img/event-private.jpg" className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                        <h3>Private Parties</h3>
                                        <div className="price">
                                            <p><span>$290</span></p>
                                        </div>
                                        <p className="font-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="icofont-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        </ul>
                                        <p>
                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur
                                        </p>
                                    </div>
                                </div>
                                <div className="row event-item">
                                    <div className="col-lg-6">
                                        <img src="assets/img/event-custom.jpg" className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                        <h3>Custom Parties</h3>
                                        <div className="price">
                                            <p><span>$99</span></p>
                                        </div>
                                        <p className="font-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="icofont-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        </ul>
                                        <p>
                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Events Section */}
                    {/* ======= Book A Table Section ======= */}
                    <section id="book-a-table" className="book-a-table">
                        <div className="container">
                            <div className="section-title">
                                <h2>Book a <span>Table</span></h2>
                                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                            </div>
                            <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form">
                                <div className="form-row">
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </section>{/* End Book A Table Section */}
                    {/* ======= Gallery Section ======= */}
                    <section id="gallery" className="gallery">
                        <div className="container-fluid">
                            <div className="section-title">
                                <h2>Some photos from <span>Our Restaurant</span></h2>
                                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-lg-3 col-md-4">
                                    <div className="gallery-item">
                                        <a href="assets/img/gallery/gallery-1.jpg" className="venobox" data-gall="gallery-item">
                                            <img src="assets/img/gallery/gallery-1.jpg" alt className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="gallery-item">
                                        <a href="assets/img/gallery/gallery-2.jpg" className="venobox" data-gall="gallery-item">
                                            <img src="assets/img/gallery/gallery-2.jpg" alt className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="gallery-item">
                                        <a href="assets/img/gallery/gallery-3.jpg" className="venobox" data-gall="gallery-item">
                                            <img src="assets/img/gallery/gallery-3.jpg" alt className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="gallery-item">
                                        <a href="assets/img/gallery/gallery-4.jpg" className="venobox" data-gall="gallery-item">
                                            <img src="assets/img/gallery/gallery-4.jpg" alt className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="gallery-item">
                                        <a href="assets/img/gallery/gallery-5.jpg" className="venobox" data-gall="gallery-item">
                                            <img src="assets/img/gallery/gallery-5.jpg" alt className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="gallery-item">
                                        <a href="assets/img/gallery/gallery-6.jpg" className="venobox" data-gall="gallery-item">
                                            <img src="assets/img/gallery/gallery-6.jpg" alt className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="gallery-item">
                                        <a href="assets/img/gallery/gallery-7.jpg" className="venobox" data-gall="gallery-item">
                                            <img src="assets/img/gallery/gallery-7.jpg" alt className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="gallery-item">
                                        <a href="assets/img/gallery/gallery-8.jpg" className="venobox" data-gall="gallery-item">
                                            <img src="assets/img/gallery/gallery-8.jpg" alt className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Gallery Section */}
                    {/* ======= Chefs Section ======= */}
                    <section id="chefs" className="chefs">
                        <div className="container">
                            <div className="section-title">
                                <h2>Our Proffesional <span>Chefs</span></h2>
                                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="member">
                                        <div className="pic"><img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt /></div>
                                        <div className="member-info">
                                            <h4>Walter White</h4>
                                            <span>Master Chef</span>
                                            <div className="social">
                                                <a href><i className="icofont-twitter" /></a>
                                                <a href><i className="icofont-facebook" /></a>
                                                <a href><i className="icofont-instagram" /></a>
                                                <a href><i className="icofont-linkedin" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="member">
                                        <div className="pic"><img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt /></div>
                                        <div className="member-info">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Patissier</span>
                                            <div className="social">
                                                <a href><i className="icofont-twitter" /></a>
                                                <a href><i className="icofont-facebook" /></a>
                                                <a href><i className="icofont-instagram" /></a>
                                                <a href><i className="icofont-linkedin" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="member">
                                        <div className="pic"><img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt /></div>
                                        <div className="member-info">
                                            <h4>William Anderson</h4>
                                            <span>Cook</span>
                                            <div className="social">
                                                <a href><i className="icofont-twitter" /></a>
                                                <a href><i className="icofont-facebook" /></a>
                                                <a href><i className="icofont-instagram" /></a>
                                                <a href><i className="icofont-linkedin" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Chefs Section */}
                    {/* ======= Testimonials Section ======= */}
                    <section id="testimonials" className="testimonials">
                        <div className="container">
                            <div className="owl-carousel testimonials-carousel">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <div className="stars">
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                    </div>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                                    </p>
                                </div>
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                    <div className="stars">
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                    </div>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                                    </p>
                                </div>
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                    <div className="stars">
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                    </div>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                                    </p>
                                </div>
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                    <div className="stars">
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                    </div>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                                    </p>
                                </div>
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                    <div className="stars">
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                    </div>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Testimonials Section */}
                    {/* ======= Contact Section ======= */}
                    <section id="contact" className="contact">
                        <div className="container">
                            <div className="section-title">
                                <h2><span>Contact</span> Us</h2>
                                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                            </div>
                        </div>
                        <div className="map">
                            <iframe style={{ border: 0, width: '100%', height: 350 }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
                        </div>
                        <div className="container mt-5">
                            <div className="info-wrap">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 info">
                                        <i className="icofont-google-map" />
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street<br />New York, NY 535022</p>
                                    </div>
                                    <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                                        <i className="icofont-clock-time icofont-rotate-90" />
                                        <h4>Open Hours:</h4>
                                        <p>Monday-Saturday:<br />11:00 AM - 2300 PM</p>
                                    </div>
                                    <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                                        <i className="icofont-envelope" />
                                        <h4>Email:</h4>
                                        <p>info@example.com<br />contact@example.com</p>
                                    </div>
                                    <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                                        <i className="icofont-phone" />
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 51<br />+1 5589 22475 14</p>
                                    </div>
                                </div>
                            </div>
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </section>{/* End Contact Section */}
                </main>

            </div>
        )
    }
}
