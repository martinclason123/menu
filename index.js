const showCustDropdown = (e) => {
  const targetNode = e.target.childNodes[4];
  const plusIcon = e.target.childNodes[1];
  const minusIcon = e.target.childNodes[2];
  const shopLink = $("#mc-shop-link");

  $(shopLink).click(() => {
    console.log("clicked!");
  });

  if ($(targetNode).is(":visible")) {
    $(targetNode).slideUp("fast");
    $(minusIcon).hide();
    $(plusIcon).show();
  } else {
    $(plusIcon).hide();
    $(minusIcon).show();
    $(targetNode).slideDown("fast");
  }
};

$("#mc-shop-link")
  .mouseover(() => {
    $("#mc-accessories-link").toggle();
    console.log("hover!");
  })
  .mouseleave(() => {
    $(".shop-dropdown-content").toggle();
    console.log("left!");
  });
// declaring hamburger menu and main menu variables
const mc_burger = $("#mc-cust-mobile-burg");
const mc_mobile_close = $("#mc-mobile-menu-close");
const mc_top_menu = $("#mc-top-menu");

// boolean to allow toggling between visible and invisible on main menu
let mc_main_menu_visible = false;

// if the menu is visible, a click on the burger hides it and vice versa
const toggle_mc_mobile_menu = () => {
  $(mc_burger).toggle();
  $(mc_mobile_close).toggle();
  if (!mc_main_menu_visible) {
    $(mc_top_menu).slideDown("fast");
    mc_main_menu_visible = true;
  } else {
    $(mc_top_menu).slideUp("fast");
    mc_main_menu_visible = false;
  }
};
