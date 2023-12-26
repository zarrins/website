const menu_data = [
  {
    id: 1,
    title: "خانه",
    link: "/",
    has_dropdown: true,
    sub_menus: [
      { link: "/", title: "Home Style 1" },
      { link: "/home-2", title: "Home Style 2" },
      { link: "/home-3", title: "Home Style 3" },
    ],
  },
  {
    id: 2,
    title: "خدمات",
    link: "/services",
    has_dropdown: true,
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/contact", title: "Contact" },
      { link: "/check-out", title: "Check Out" },
      { link: "/faq", title: "FAQ" },
      { link: "/register", title: "Register" },
      { link: "/sign-in", title: "Sign In" },
    ],
  },
  {
    id: 3,
    title: "درباره ما",
    link: "/about",
    has_dropdown: true,
    sub_menus: [
      { link: "/instructor", title: "Instructor" },
      { link: "/instructor-profile", title: "Instructor Profile" },
    ],
  },
  {
    id: 4,
    title: "تماس با ما",
    link: "/contact",
    has_dropdown: true,
    sub_menus: [
      { link: "/service-grid", title: "service Grid" },
      { link: "/service-list", title: "service List" },
      { link: "/service-details", title: "service Details" },
    ],
  },
  {
    id: 5,
    title: "بلاگ",
    link: "/blog",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog Sidebar" },
      { link: "/blog-grid", title: "Blog Grid" },
      { link: "/blog-masonry", title: "Blog Masonry" },
      { link: "/blog-details", title: "Blog Details" },
    ],
  },

];
export default menu_data;
